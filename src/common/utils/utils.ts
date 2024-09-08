export const generateRandomEmail = (): string => {
    const randomString = Math.random().toString(36).substring(2, 8);
    const domain = "gmail.com";
    return `Test${randomString}@${domain}`;
};