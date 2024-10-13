import {useRef , useState} from 'react'
import {Editor} from "@monaco-editor/react"
import { Box } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react';
import LanguageSelector from "./LanguageSelector";
import {CODE_SNIPPETS} from "../constants";
import { Output } from './Output';
export const CodeEditor = () => {
    const editorRef =useRef()
    const [value, setValue] = useState("");
    const[language , setLanguage]= useState('javascript')

    const onMount =(editor)=>{
        editorRef.current =editor;
        editor.focus();

    }
    const onSelect =(language) =>{
        setLanguage(language);
        setValue(CODE_SNIPPETS[language]
        )
    };
return (
<Box>
    <HStack spacing={4}>
    <Box w="50%">
<LanguageSelector language={language} onSelect={onSelect}/>
        <Editor
        height="90vh"
        theme="vs-dark"
        language= {language}
        defaultValue={CODE_SNIPPETS [language]}
        onMount ={onMount}
        value={value}
        onChange={(value) =>setValue(value)}
        />

        </Box>
        <Output editorRef ={editorRef} language ={language} />
</HStack>
</Box>
        
);
}
