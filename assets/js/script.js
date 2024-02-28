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
            newText = '<h2> OSI <br> </h2> <p> O modelo Open Systems Interconnection (OSI) é uma estrutura conceitual que divide as funções de comunicação de rede em sete camadas. O envio de dados por uma rede é complexo porque várias tecnologias de hardware e software devem funcionar de forma coesa além das fronteiras geográficas e políticas. <br> </p> <p> O Modelo OSI foi desenvolvido pela International Organization for Standardization (ISO) no final da década de 1970. A ISO é uma organização internacional de padronização que desenvolvem e publicam normas internacionais. Temos as seguintes camadas como parte do modelo: <br> </p> <h3> Camada 1, física: <br> </h3> <p> Nesta camada são especificados os dispositivos, como hubs e os meios de transmissão, como os cabos de rede. Os dados são transmitidos por esses meios e processados na próxima camada. <br> </p> <h3> Camada 2, ligação: <br> </h3> <p> Nesta camada, os dados recebidos do meio físico são verificados para ver se possuem algum erro e, se possuírem, esse erro pode ser corrigido. Dessa forma, as camadas superiores podem assumir uma transmissão praticamente sem erros. Esta camada também controla o fluxo que os dados são transmitidos. Ela possui 2 subcamadas, sendo elas: <br> </p> <h4> MAC: <br> </h4> <p> É esta camada que possibilita a conexão de diversos computadores em uma rede. Cada máquina conectada na rede tem um endereço físico, conhecido como endereço MAC. É esse endereço que a camada utiliza para identificar e enviar os pacotes. <br> </p> <h4> LLC: <br> </h4> <p> É nesta camada que temos o controle de fluxo dos dados na rede. É por conta dela que conseguimos ter vários protocolos da próxima camada convivendo dentro de uma mesma rede. <br> </p> <h3> Camada 3, rede: <br> </h3> <p> É nesta camada que temos o endereçamento IP de origem e de destino, ela também pode priorizar alguns pacotes e decidir qual caminho seguir para enviar seus dados. <br> </p> <h3> Camada 4, transporte: <br> </h3> <p> É esta camada que garante o envio e o recebimento dos pacotes vindos da camada 3. Ela gerencia o transporte dos pacotes para garantir o sucesso no envio e no recebimento de dados. Protocolos muito comuns dessa camada são os protocolos TCP em UDP. O primeiro garante a entrega da mensagem, diferente do segundo. Por não garantir a entrega da mensagem, o protocolo UDP é um pouco mais rápido que o TCP. <br> </p> <h3> Camada 5, sessão: <br> </h3> <p> Esta camada é responsável por estabelecer e encerrar a conexão entre hosts. É ela quem inicia e sincroniza os hosts. Além de realizar o estabelecimento das sessões, esta camada também provém algum suporte a elas, como registros de log e realização de tarefas de segurança. <br> </p> <h3> Camada 6, apresentação: <br> </h3> <p> Esta é a camada responsável por fazer a tradução dos dados para que a próxima camada os use. Nesta camada temos a conversão de códigos para caracteres, a conversão e compactação dos dados, além da criptografia desses dados, caso necessite. <br> </p> <h3> Camada 7, aplicação: <br> </h3> <p> A última camada do modelo OSI é a camada para consumir os dados. Nesta camada, temos os programas que garantem a interação humano-máquina. Nela conseguimos enviar e-mails, transferir arquivos, acessar websites, conectar remotamente em outras máquinas, entre outras coisas. É nesta camada que temos os protocolos mais conhecidos como o HTTP, FTP, além de serviços como o DNS. <br> </p>';
            break;
        default:
            document.getElementById('home').style.display = 'none';
            document.getElementById('content').style.display = 'none';
            newText = '<p>Conteúdo não encontrado.</p>';
            break;
    }
    document.getElementById('content').innerHTML = newText;
}