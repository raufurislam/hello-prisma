import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  NODE_ENV: "development" | "production";
  DATABASE_URL: string;
}

const loadEnvVariables = (): EnvConfig => {
  const requiredEnvVariables: string[] = ["PORT", "DATABASE_URL", "NODE_ENV"];

  requiredEnvVariables.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing require environment variable ${key}`);
    }
  });
  return {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    DATABASE_URL: process.env.DB_URL!,
    NODE_ENV: process.env.NODE_ENV as "development" | "production",
  };
};

export const envVars: EnvConfig = loadEnvVariables();
