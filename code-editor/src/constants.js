export const LANGUAGE_VERSIONS ={
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
    
};
export const CODE_SNIPPETS = {
    javascript: `\n function greet (name) { \n\t console.log("Hello," + name + "!");\n}\n\ngreet ("Alex");\n`,
    typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet (data: Params) {\n\tconsole.log("Hello
    "!");\n\n\n greet ({ name: "Alex" });\n`,
    python: `\ndef greet (name):\n\tprint ("Hello, " + name + "!")\n\ngreet ("Alex")\n`,
    java: `\npublic class HelloWorld {\n\t public static void main(String[] args) {\n\t\tSystem.out.println("Hello");
    \n }\n }`,
    csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello {\n\t\tstatic void Main(string[] args) {\n\t\
    ("Hello World in C#");\n\t\t}\n\t}\n}\n',
    php: "<?php\n\n$name = 'Alex';\necho $name;\n",
    };
    