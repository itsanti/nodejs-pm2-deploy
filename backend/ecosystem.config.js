require("dotenv").config({ path: "../.env.deploy" });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF,
  DEPLOY_REPO,
  DEPLOY_PATH_BACKEND,
} = process.env;

module.exports = {
  apps: [
    {
      name: "api-service",
      script: `./dist/app.js`,
      watch: true,
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      ssh_options: "IdentityFile=~/.ssh/edvm",
      env: {
        PATH: `/home/${DEPLOY_USER}/.nvm/versions/node/v20.19.5/bin:$PATH`,
      },
      "pre-deploy-local": `scp -i ~/.ssh/edvm ./.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH_BACKEND}/.env`,
      "post-deploy": `cd ${DEPLOY_PATH_BACKEND} && npm i && npm run build && pm2 reload ${DEPLOY_PATH_BACKEND}/ecosystem.config.js --env production`,
    },
  },
};
