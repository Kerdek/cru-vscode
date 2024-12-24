
export const onChange = () => {}

export const activate = () => {
  // vscode.languages.registerHoverProvider('cru', {
  //     provideHover: (doc, pos) => {
  //         let type = null;
  //         let xpos = null;
  //         try {
  //             const prog = defs(doc.getText())
  //             const globals = {};
  //             for (let arg of prog) {
  //                 if (arg.form === 'func') {
  //                     globals[arg.args[0].repr] = new Form('tfunc', arg.args[0], arg.args.slice(1, -1));
  //                 }
  //                 if (arg.form === 'extern') {
  //                     globals[arg.args[0].repr] = new Form('textern', arg.args[0], arg.args.slice(1));
  //                 }
  //                 const all = walkHover(arg, pos, globals);
  //                 if (all != null) {
  //                     const { restype, start, end } = all;
  //                     if (restype != null) {
  //                         type = typeRepr(restype);
  //                         xpos = new vscode.Range(start, end);
  //                     }
  //                     break;
  //                 }
  //             }
  //         } catch (e) {
  //             console.log(e.stack);
  //         }
  //         if (type == null) {
  //             return null;
  //         }
  //         return new vscode.Hover({
  //             language: 'ebrew',
  //             value: type,
  //             range: xpos,
  //         });
  //     },
  // });


  // vscode.languages.registerDocumentSymbolProvider('cru', {
  //     provideDocumentSymbols: (doc) => {
  //         const prog = defs(doc.getText())
  //         const ret = [];
  //         for (const def of prog) {
  //             if (def.start == null || def.end == null) {
  //                 continue;
  //             }
  //             const range = new vscode.Range(toPos(def.start), toPos(def.end));
  //             ret.push(new vscode.DocumentSymbol(def.args[0].repr, def.form, vscode.SymbolKind.Function, range, range));
  //         }
  //         return ret;
  //     }
  // });
  // const tokenTypes = ['entity.name.function', 'variable', 'variable.parameter'];
  // const tokenModifiers = [];
  // const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);
  // const provideDocumentSemanticTokens = (doc) => {
  //     const builder = new vscode.SemanticTokensBuilder(legend);
  // //                 builder.push(new vscode.Range(toPos(ident.start), toPos(ident.end)), 'function', []);
  // //     return builder.build();
  // };
  // vscode.languages.registerDocumentSemanticTokensProvider('cru', { provideDocumentSemanticTokens }, legend);
};

export const deactivate = () => {

};