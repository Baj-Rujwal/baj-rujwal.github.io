const ModalContent = ({ title, content }: { title: string, content: string[] }) => {
    return (
        <div className="flex flex-col items-start">
            <h2>{title}</h2>
            <ul className="text-left list-disc gap-1">
                {content.map(ct => (
                    <li key={ct}>{ct}</li>
                ))}
            </ul>
        </div>
    )
}

export default ModalContent;