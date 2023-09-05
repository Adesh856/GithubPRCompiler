import dotenv  from "dotenv"
dotenv.config()
export const githubAppConfig = {
    appId: process.env.appcode, // Figstack doesn't display the App ID publicly, you'll get it during GitHub App creation.
    privateKey:process.env.Clientsecret,
  };
  