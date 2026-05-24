import React, { useEffect, useRef, useState } from 'react';
import './GitBashTerminal.css';

const PROMPT_USER = 'vanca@rafael-portfolio';
const PROMPT_PATH = '~/portfolio';

function downloadCv() {
  const a = document.createElement('a');
  a.href = '/cv-rafael.pdf';
  a.download = 'cv-rafael.pdf';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function runCommand(raw, lang) {
  const cmd = raw.trim();
  const lower = cmd.toLowerCase();

  if (!cmd) return [];

  if (lower === 'help' || lower === 'help.exe') {
    return lang === 'ro'
      ? [
          'Comenzi disponibile:',
          '  help, clear, ls, pwd, whoami, git status, git clone, exit',
          '  (sugestie: încearcă git clone)',
        ]
      : [
          'Available commands:',
          '  help, clear, ls, pwd, whoami, git status, git clone, exit',
          '  (hint: try git clone)',
        ];
  }

  if (lower === 'clear' || lower === 'cls') return [{ type: 'clear' }];

  if (lower === 'exit' || lower === 'quit') return [{ type: 'exit' }];

  if (lower === 'pwd') return [`/c/Users/vanca/SiteCV/rafael-portfolio`];

  if (lower === 'whoami') return ['vanca'];

  if (lower === 'ls' || lower === 'dir') {
    return [
      'src/  public/  dist/  package.json  README.md  cv-rafael.pdf',
    ];
  }

  if (lower === 'git status') {
    return [
      'On branch main',
      'Your branch is up to date with origin/main.',
      '',
      'nothing to commit, working tree clean',
    ];
  }

  if (/^git\s+clone\b/i.test(cmd)) {
    downloadCv();
    const repo = cmd.replace(/^git\s+clone\s+/i, '').trim() || 'https://github.com/RafaelMarian/rafael-portfolio.git';
    return [
      `Cloning into '${repo.includes('/') ? 'rafael-portfolio' : repo}'...`,
      'remote: Enumerating objects: 42, done.',
      'remote: Counting objects: 100% (42/42), done.',
      'remote: Compressing objects: 100% (28/28), done.',
      'Receiving objects: 100% (42/42), 221.00 KiB | 4.10 MiB/s, done.',
      'Resolving deltas: 100% (12/12), done.',
      '',
      lang === 'ro'
        ? 'Checkout: cv-rafael.pdf — descărcare pornită.'
        : 'Checkout: cv-rafael.pdf — download started.',
    ];
  }

  return lang === 'ro'
    ? [`bash: ${cmd}: command not found`]
    : [`bash: ${cmd}: command not found`];
}

export default function GitBashTerminal({ lang, onClose }) {
  const [lines, setLines] = useState(() => [
    {
      type: 'system',
      text:
        lang === 'ro'
          ? 'Git Bash — tasta ` pentru închidere. Încearcă: git clone'
          : 'Git Bash — press ` to close. Try: git clone',
    },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const appendLines = (newLines) => {
    setLines((prev) => {
      let next = [...prev];
      for (const item of newLines) {
        if (item?.type === 'clear') {
          next = [];
          continue;
        }
        if (item?.type === 'exit') {
          onClose();
          return prev;
        }
        next.push({ type: 'output', text: typeof item === 'string' ? item : item.text });
      }
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = input.trimEnd();
    if (!value) return;

    setLines((prev) => [...prev, { type: 'input', text: value }]);
    setHistory((h) => [...h, value]);
    setHistoryIdx(-1);
    setInput('');

    const result = runCommand(value, lang);
    appendLines(result);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIdx < 0 ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInput(history[nextIdx]);
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx < 0) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= history.length) {
        setHistoryIdx(-1);
        setInput('');
      } else {
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx]);
      }
    }
  };

  return (
    <div className="git-bash-overlay" onClick={onClose} role="presentation">
      <div
        className="git-bash-window"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Git Bash"
      >
        <div className="git-bash-titlebar">
          <span className="git-bash-title">MINGW64:/c/Users/vanca/SiteCV/rafael-portfolio</span>
          <button type="button" className="git-bash-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="git-bash-body">
          {lines.map((line, i) => {
            if (line.type === 'input') {
              return (
                <div key={i} className="git-bash-line">
                  <span className="git-bash-prompt">
                    <span className="git-prompt-user">{PROMPT_USER}</span>
                    <span className="git-prompt-mingw"> MINGW64</span>
                    <span className="git-prompt-path"> {PROMPT_PATH}</span>
                  </span>
                  <span className="git-prompt-dollar">$</span>
                  <span className="git-bash-input-echo">{line.text}</span>
                </div>
              );
            }
            if (line.type === 'system') {
              return (
                <div key={i} className="git-bash-line git-bash-system">
                  {line.text}
                </div>
              );
            }
            return (
              <div key={i} className="git-bash-line git-bash-output">
                {line.text}
              </div>
            );
          })}
          <form className="git-bash-line git-bash-form" onSubmit={handleSubmit}>
            <span className="git-bash-prompt">
              <span className="git-prompt-user">{PROMPT_USER}</span>
              <span className="git-prompt-mingw"> MINGW64</span>
              <span className="git-prompt-path"> {PROMPT_PATH}</span>
            </span>
            <span className="git-prompt-dollar">$</span>
            <input
              ref={inputRef}
              type="text"
              className="git-bash-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
