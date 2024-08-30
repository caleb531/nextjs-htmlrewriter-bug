import { HTMLRewriter } from 'htmlrewriter';
import { NextResponse } from 'next/server';

export async function GET() {
    
    const rewriter = new HTMLRewriter();
    const classNames: string[] = [];

    rewriter.on('*', {
        element(element) {
            const className = element.getAttribute('class');
            if (className) {
                classNames.push(className);
            }
        }
    });

    return NextResponse.json(classNames);

}