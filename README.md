# poke-server
The poke system on local network.

### Usage
poke includes two npm packages. Those are poke-server and poke-client. poke-server is a package for running web interface. poke-client is a package for receiving notifications.

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
poke-client <SERVER HOST> <CLIENT ID YOU DECIDED> <MP3 SOUND FILE>
```

**5. access server using web browser.**

The URL is http://{SERVER_HOST}:3001.

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License
MIT License
