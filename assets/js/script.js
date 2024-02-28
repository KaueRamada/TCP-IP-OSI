function changeContent(text) {
    let newText = '';
    
    switch (text) {
        case 'HOME':
            document.getElementById('home').style.display = 'block';
            document.getElementById('content').style.display = 'none';
            newText = '<h2>Título HOME</h2><p>Este é o conteúdo da HOME.</p>';
            break;
        case 'TCP':
            document.getElementById('home').style.display = 'none';
            document.getElementById('content').style.display = 'block';
            newText = '<h2>Título TCP</h2><p>Este é o conteúdo do TCP.</p>';
            break;
        case 'OSI':
            document.getElementById('home').style.display = 'none';
            document.getElementById('content').style.display = 'block';
            newText = '<h2>Título OSI</h2><p>Este é o conteúdo do OSI.</p>';
            break;
        default:
            document.getElementById('home').style.display = 'none';
            document.getElementById('content').style.display = 'none';
            newText = '<p>Conteúdo não encontrado.</p>';
            break;
    }
    document.getElementById('content').innerHTML = newText;
}