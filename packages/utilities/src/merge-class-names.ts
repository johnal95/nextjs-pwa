export default function mergeClassNames(...classNames: (string | undefined)[]): string {
    return classNames.filter((className) => className?.length).join(" ");
}
