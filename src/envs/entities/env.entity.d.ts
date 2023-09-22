type Environment = {
  Development: string;
  Production: string;
  Test: string;
  Provision: string;
};

type Mongo = {
  url: string;
  user: string;
  password: number;
};

type EnvConfig = {
  serverConfig: {
    port: number;
  };
  database: {
    databaseUrl: string;
  };
};
