/**
 * Response object
 * @param {func} response - HTTP response
 * @param {object} resObject - response object
 */
export const Response = (response, resObject) => {
    const { status, message, data } = resObject;
    if (status >= 300) {
      return response.status(status).json({ status, error: message });
    }
    return response.status(status).json({ status, message, data });
  };

/**
 * Logger
 * @param {string} params - string you want to log out
 */
  export const logger = (params) => {
    const log = console;
    log.table(params);
  };

/**
 * Get Environment Variables
 * @param {string / number} variable - Main env
 * @param {string / number} defaultValue - Default env if main env not found
 */
  export const getEnv = (variable, defaultValue) => {
    const value = process.env[variable] || defaultValue;
    return value;
  };
