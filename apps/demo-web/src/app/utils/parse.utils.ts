export namespace ParseUtils {
  export function getStringBetweenCommentTags(docText: string, commentKey: string): string {
    const startTag = commentTag('start');
    const endTag = commentTag('end');

    return docText.substring(docText.indexOf(startTag) + startTag.length, docText.indexOf(endTag));

    function commentTag(bound: 'start' | 'end'): string {
      return `<!-- ${commentKey}:${bound} -->`
    }
  }

  export function parseMarkdownTable(mdTable: string) {
    mdTable = mdTable.trim();

    const lines = mdTable.split('\n');
    const result: string[][] = [];

    for (let i = 2; i < lines.length; i++) {
      result.push(
        lines[i].trim().split('|')
          .filter(x => !!x)
          .map(x => {
            return x.trim().replace(/['`"]/g, '');
          }));
    }

    return result;
  }
}
