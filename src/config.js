module.exports = {
    port: 4000,
    appName: 'API TODO',
    mongoURL: 'mongodb+srv://admin:1234@coders.jxqy1.mongodb.net/todo?retryWrites=true&w=majority',
    mongoSetup: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    jwtSecretSenha: 'secretHashSenha',
    saltRounds: 10,
    TelegramBotToken: '1732364257:AAF4PHMJ1E74kJrOjyPeIKGjxwgqDXXqvuE'
}