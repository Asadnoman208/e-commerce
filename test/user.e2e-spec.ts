import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as mongoose from 'mongoose';
import * as request from 'supertest';
import { MESSAGES } from "./../src/common/utils/responseMessages";
import { HttpExceptionFilter } from "./../src/common/strategies/http-exception.filter";
import { ValidationPipe } from '@nestjs/common';
import { generateRandomEmail } from "./../src/common/utils/utils";

describe('UserController (E2E)', () => {
    let app: INestApplication;
    var RandomEmail = generateRandomEmail()
    var loginUserInfo: any = null

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();


        app = moduleFixture.createNestApplication();

        app.useGlobalPipes(new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }));

        // Set up global exception filter
        app.useGlobalFilters(new HttpExceptionFilter());

        await app.init();

    });



    afterAll(async () => {
        await app.close();
        await mongoose.connection.close();
    });


    const mockData = [
        {
            module: "User",
            url: "/auth/register",
            method: 'POST',
            cases: [
                {
                    description: "should be succesfull rgister",
                    input: {
                        email: RandomEmail,
                        password: "Valid123!",
                        name: "Test User",
                        userType: "consumer"
                    },
                    expected: {
                        status: HttpStatus.CREATED, message: MESSAGES.CREATED, data: expect.any(Object)
                    },
                },
                {
                    description: "Email already exists",
                    input: {
                        email: "existing@example.com",
                        password: "Valid123!",
                        name: "Existing User",
                        userType: "consumer"
                    },
                    expected: { status: HttpStatus.CONFLICT, message: MESSAGES.EMAIL_EXISTS, data: null },
                },
                {
                    description: "Missing required fields",
                    input: {
                        email: RandomEmail,
                        password: "Valid123!",
                        name: "",
                        userType: "consumer"
                    },
                    expected: { status: HttpStatus.BAD_REQUEST, message: MESSAGES.REQUIRED_FIELD, data: null },
                },
                {
                    description: "Invalid email format",
                    input: {
                        email: "invalid-email",
                        password: "Valid123!",
                        name: "Invalid Email User",
                        userType: "consumer"
                    },
                    expected: { status: HttpStatus.BAD_REQUEST, message: MESSAGES.INVALID_FORMAT, data: null },
                },
                {
                    description: "Invalid Password format",
                    input: {
                        email: RandomEmail,
                        password: "Validsfd",
                        name: "Invalid password User",
                        userType: "consumer"
                    },
                    expected: { status: HttpStatus.BAD_REQUEST, message: MESSAGES.PASSWORD_FORMAT, data: null },
                }
            ]
        },
        {
            module: "User",
            url: "/auth/login",
            method: 'POST',
            cases: [
                {
                    description: "Successful login",
                    input: { email: RandomEmail, password: "Valid123!" },
                    tokenCheck: true,
                    expected: { status: HttpStatus.OK, message: MESSAGES.SUCCESS, data: expect.any(Object) },
                },
                {
                    description: "Only one active session is allowed",
                    input: { email: "asad@gmail.com", password: "Abcd123@" },
                    expected: { status: HttpStatus.BAD_REQUEST, message: MESSAGES.ALREADY_ACTIVE_SESSION, data: null },
                },
                {
                    description: "Invalid credentials",
                    input: { email: "wrong@gmail.com", password: "WrongPass1!" },
                    expected: { status: HttpStatus.BAD_REQUEST, message: MESSAGES.INVALID_CREDENTIALS, data: null },
                },
                {
                    description: "Missing credentials",
                    input: { email: "", password: "" },
                    expected: { status: HttpStatus.BAD_REQUEST, message: MESSAGES.REQUIRED_FIELD, data: null },
                }
            ],
        },
        {
            module: "User sessions",
            url: "/auth/getAllSessions",
            method: 'GET',
            cases: [
                {
                    description: "should be successfull api call",
                    input: {},
                    tokenCheck: false,
                    expected: { status: HttpStatus.OK, message: MESSAGES.FETCHED, data: expect.any(Object) },
                }
            ],
        }

    ]


    mockData.forEach((item) => {
        describe(item.module, () => {
            item.cases.forEach((value) => {
                it(value.description, async () => {

                    let response;
                    let userId = loginUserInfo?.userId

                    if (item.method === 'POST') {
                        response = await request(app.getHttpServer())
                            .post(item.url)
                            .send(value.input)

                    } else if (item.method === 'GET') {
                        response = await request(app.getHttpServer())
                            .get(item.url)
                            .query(value.input);

                    }

                    expect(response.body.status).toBe(value.expected.status);
                    expect(response.body.message).toContain(value.expected.message);
                    if (value.tokenCheck) {
                        expect(response.body.data.authToken).toBeDefined();
                        expect(typeof response.body.data.authToken).toBe('string');
                        expect(typeof response.body.data.userId).toBe('string');
                        loginUserInfo = response.body.data
                    }
                });
            })
        });
    })

});
