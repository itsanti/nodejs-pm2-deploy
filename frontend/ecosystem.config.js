require("dotenv").config({ path: "../.env.deploy" });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF,
  DEPLOY_REPO,
  DEPLOY_PATH_FRONTEND,
} = process.env;

module.exports = {
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
        NODE_OPTIONS: "--openssl-legacy-provider",
      },
      "post-deploy": `cd ${DEPLOY_PATH_FRONTEND} && npm i && npm run build`,
    },
  },
};
