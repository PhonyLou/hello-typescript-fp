# hello-typescript-fp
I'm pairing with ChatGPT to build this repo. Hope it could guide me to finish a comprehensive demo with Jest, Typescript, React, and Functional Programming concepts.
我想要和ChatGPT一起写点代码，看看它能帮我做什么。

聊天内容导出在[这个文件夹](https://github.com/PhonyLou/hello-typescript-fp/tree/master/chatHistory)里。 I'm using [this tool](https://github.com/pionxzh/chatgpt-exporter) to expose chat history. 

Have Fun!

### You:
I'm new frontend developer, could you play as an senior developer to guide me

### ChatGPT:
blablabla (without any code lol)

### You:
I want to create a typescript application uses Jest as test lib, and react, could you let me know what's the 1st step to do?

### ChatGPT:
1. npx create-react-app my-app --template typescript
2. npm install --save-dev jest @types/jest
3. (it suggests to add `jest.config.js` file, but I didn't follow.)
4. Write some tests: Create a new folder called __tests__ in your src folder, and create some test files inside it. For example, you could create a file called App.test.tsx with the following code:
5. npm test

### You:
Now I want to have an Input box to let users type in Book name, the book name should follow below validation rules:
it allows user to type in words A to Z (and a to z), 0-9;
if the input length greater than 30, raise an alert to user;
if the input length is 0, raise an alert to user;

Based on rules above, generate test code for me.

### ChatGPT:
blablabla

### You:
I don't have BookInput component, what's the next step

### ChatGPT:
blablabla

### You:
the Expected: "Harry Potter and the Philosopher's Stone" doesn't match Received: "HarryPotterandthePhilosophersS"