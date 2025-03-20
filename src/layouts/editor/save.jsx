import { useEditor } from '@craftjs/core';
import { Button } from '@mantine/core';

function Save() {
    const { query } = useEditor();
    
    const click = () => {
        let json = query.serialize();
        
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'editor-data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url);
    };

    return (
        <Button size="xs" h={35} onClick={click}>Save</Button>
    );
}

export default Save;