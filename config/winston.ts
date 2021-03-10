import { createLogger, transports, format } from 'winston';

interface TransformableInfo {
  level: string;
  message: string;
  [key: string]: any;
}

const logger = createLogger({
  transports: [
    new transports.Console({
      level: 'debug',
      format: format.combine(
        format.label({ label: '[my-server]' }),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.colorize(),
        format.printf(
          (info: TransformableInfo) =>
            `${info.timestamp} - ${info.level}: ${info.label} ${info.message}`,
        ),
      ),
    }),
  ],
});

const stream = {
  write: (message: string): void => {
    logger.info(message);
  },
};

export { logger, stream };
