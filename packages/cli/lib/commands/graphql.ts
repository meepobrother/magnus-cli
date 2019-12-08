import { Command, Option, Action } from '@nger/cli';
import { toGraphql } from '@nger/ast.ts-graphql';
@Command({
    name: 'graphql'
})
export class GraphqlCommand {
    @Option({
        alias: 'i'
    })
    input: string = 'main.ts';
    @Option({
        alias: 'o'
    })
    output: string = 'notadd.graphql';

    @Action()
    createGraphql() {
        const root = process.cwd()
        toGraphql()
    }
}
