function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.Description}
# ${data.TableofContents}
# ${data.Installation}
# ${data.Usage}
# ${data.License}
# ${data.Contributing}
# ${data.Tests}
# ${Questions}
`;
}

module.exports = generateMarkdown;
