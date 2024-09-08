export const REGEX = {
    PASSWORD_FORMAT: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
    EXPIRE_CARD_DATE: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
}