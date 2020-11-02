const converter = new showdown.Converter();

function updateMarkdown(markdownText) {
  var targetDiv = document.getElementById("targetDiv"),
    html = converter.makeHtml(`---
\`\`\`
${markdownText}
\`\`\`
---
`);

  targetDiv.innerHTML = `
<pre>
${markdownText}
</pre>
`;
}
