import React, {
    useEffect,
    useState,
    useRef,
    useCallback,
    CSSProperties,
} from "react"
import clsx from "clsx"
import codeBlockContentStyles from "@docusaurus/theme-classic/src/theme/CodeBlock/Content/styles.module.css"
import CopyButton from "@theme/CodeBlock/CopyButton"
import Highlight, { Prism, Language, PrismTheme } from "prism-react-renderer"
import styles from "./styles.module.css"

// source code of LiveEditor that allows for code editing
// a good starting point for customizing our own code editor

function CodeEditor(props: {
    className: string
    code: string
    disabled: boolean
    language: string
    onChange: (code: string) => void
    prism: typeof Prism
    style?: CSSProperties
    theme: PrismTheme
    showLineNumbers: boolean
    readonly: boolean
    sandbox?: Record<string, any>
}) {
    const { code } = props
    // const [disabled, setDisabled] = useState(props.disabled);
    const [allowUndo, setAllowUndo] = useState(false)
    const [tmpCode, setTmpCode] = useState("")
    const [hasFocus, setHasFocus] = useState(false)

    const disabled = props.disabled || !hasFocus

    useEffect(() => {
        if (props.onChange) {
            props.onChange(code)
        }
    }, [code])

    const handleFocus = () => {
        const selectObj = window.getSelection()
        if (selectObj.rangeCount === 0) {
            // when focusing on the editor without using the mouse,
            // merely from the Tab key
            const range = new Range()
            range.collapse(true)
            selectObj.addRange(range)
        }
        setHasFocus(true)
    }

    const handleBlur = () => {
        setHasFocus(false)
    }
    return (
        <div className={props.className} style={props.style}>
            <Highlight
                Prism={props.prism || Prism}
                code={code}
                theme={props.theme}
                language={props.language as Language}
            >
                {({
                    className: _className,
                    tokens,
                    getLineProps,
                    getTokenProps,
                    style: _style,
                }) => (
                    <div
                        className={clsx(
                            styles.CustomCodeEditorContent,
                            codeBlockContentStyles.codeBlockContent
                        )}
                    >
                        {props.showLineNumbers && (
                            <span
                                className={clsx(
                                    styles.LineNumber,
                                    // codeBlockLineNumberStyles.codeLineNumber,
                                    codeBlockContentStyles.codeBlockLines
                                )}
                            >
                                {tokens.map((line, i) => (
                                    <>
                                        {i + 1}
                                        <br />
                                    </>
                                ))}
                            </span>
                        )}
                        <pre
                            tabIndex={0}
                            className={clsx(
                                _className,
                                styles.codeBlock,
                                "thin-scrollbar"
                            )}
                            style={{
                                padding: "0",
                                ...(!props.className || !props.theme
                                    ? {}
                                    : _style),
                            }}
                            spellCheck="false"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        >
                            <code
                                className={clsx(
                                    codeBlockContentStyles.codeBlockLines
                                )}
                            >
                                {tokens.map((line, lineIndex) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div
                                        {...getLineProps({
                                            line,
                                            key: `line-${lineIndex}`,
                                        })}
                                    >
                                        {line
                                            .filter(token => !token.empty)
                                            .map((token, tokenIndex) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <span
                                                    {...getTokenProps({
                                                        token,
                                                        key: `token-${tokenIndex}`,
                                                    })}
                                                />
                                            ))}
                                        {"\n"}
                                    </div>
                                ))}
                            </code>
                        </pre>
                    </div>
                )}
            </Highlight>
            <div className={codeBlockContentStyles.buttonGroup}>
                <CopyButton
                    className={codeBlockContentStyles.codeButton}
                    code={code}
                />
            </div>
        </div>
    )
}

export default CodeEditor
