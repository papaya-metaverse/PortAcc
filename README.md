<img width="1380" alt="PortAcc" src="https://github.com/papaya-metaverse/PortAcc/assets/22211749/4321ebf8-d97f-4d2f-8604-c34fb7a86645">

### Project description
PortAcc simplifies user onboarding and interaction in the cryptocurrency world. We achieve this by using the ERC-4337 standard, which reduces the need for additional software or extensive knowledge of cryptocurrency. Our goal is to make blockchain technology accessible and inclusive for all users.

PortAcc operates on the SafeGlobal multisig infrastructure, which enhances security through a three-wallet system. This setup provides an extra layer of protection against unauthorized access and ensures the safety of user assets. One unique feature of our system is the creation of a "latent wallet" when a user logs in for the first time using a social network authentication. This wallet is immediately generated but remains encrypted and inactive until the user claims ownership.

This approach improves both security and user experience. Setting up and managing a wallet can be overwhelming for newcomers to the cryptocurrency space. PortAcc simplifies this process by automating wallet creation while giving users control, aligning with the decentralized nature of Web3.

Additionally, our solution eliminates the need for users to understand the technicalities of crypto-wallet operations or manage private keys, which are often seen as barriers to entry. By integrating social media authentication, we provide familiarity, comfort, and trust to users, expanding our user base.

In summary, PortAcc is a secure and user-friendly gateway to the cryptocurrency world that promotes inclusivity and accessibility. By making the cryptosphere more approachable, we not only simplify technology, but also expand the community, foster inclusivity, and drive innovation in Web3. Our project is a cutting-edge solution in this space, combining technical sophistication, user benefits, and innovation.
### How it`s made
This project uses SafeGlobal multisig. We using multisig to send and execute transactions, by design it needed three (two at first time) wallets. When a user uses our solution for the first time, we create a wallet for him and encrypt it, at this stage it doesn't matter how, as the wallet can be recreated later. When the user feels experienced enough, we will give him this generated wallet on request. So that the user can remove us from the multisig management at any time.

### How to start it?

#### docker build -t portacc-be .

Then you need to set up docker compose:

version: "3.9"

services:
  user-api:
    image: portac-be
    ports:
      - "8080:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=10.10.10.111
      - DB_PORT=5432
      - DB_USER=papaya_portacc_dev_admin
      - DB_PASSWORD=papaya777dev
      - DB_NAME=papaya_portacc_dev_db
      - JWT_ACCESS_SECRET=***
      - JWT_REFRESH_SECRET=***
      - GOOGLE_CLIENT_ID=***
      - GOOGLE_SECRET=***
      - GOOGLE_CALLBACK=https://portacc.papaya.ws/api/auth/callback/google
      - EXTERNAL_AUTH_SUCCESS=https://portacc.papaya.ws/google/success-auth
      - PROVIDER=https://polygon-mumbai.g.alchemy.com/v2/ShFoDreXo07PfQs9vaaNRCln0FMDKRDD

#### And finally start it with:

docker compose -f file_name up -d




