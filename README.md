# poke-server
The poke system on local network.

### Usage
poke includes two npm packages. those are poke-server and poke-client. poke-server is a package for running web interface. poke-client is a package for receiving notifications.

**1. install poke-server**
```bash
npm install -g TakutoYoshikai/poke-server
```

**2. install poke-client on your computer in room**
```bash
npm install -g TakutoYoshikai/poke-client
```

**3. start server**
```bash
poke-server
```

**4. start client**
```bash
poke-client <SERVER HOST> <CLIENT ID YOU DECIDED>
```

**5. access server using web browser.**
The URL is http://{SERVER_HOST}>:3001.

### License
MIT License
