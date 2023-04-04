//선언파일
//구현하는 것이 아닌 call signature만
//즉 이런식으로 해줘야 ts가 알고 알려줌
interface Config{
    url: string;
}

declare module "myPackage"{
    function init(config: Config): boolean;
    function exit(code: number): number;
}