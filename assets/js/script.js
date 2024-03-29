function restart() {
    document.addEventListener('click', () => {
        location.reload()
    })
}

function changeContent(text) {
    let newText = '';

    document.querySelectorAll('.navbar ul li').forEach(item => {
        item.classList.remove('active');
    });

    switch (text) {
        case 'HOME':
            document.getElementById('home').style.display = 'flex';
            document.getElementById('content').style.display = 'none';
            document.getElementById('ocean').style.display = 'flex';
            newText = '<h2>Título HOME</h2><p>Este é o conteúdo da HOME.</p>';
            document.querySelector('.navbar ul li:nth-child(1)').classList.add('active');
            break;
        case 'TCP':
            document.getElementById('home').style.display = 'none';
            document.getElementById('content').style.display = 'flex';
            document.getElementById('ocean').style.display = 'none';
            document.querySelector('.navbar ul li:nth-child(2)').classList.add('active');
            newText = '<div><h1> O que é TCP/IP?<br><br></h1> <p> O TCP/IP é o principal protocolo de envio e recebimento de dados MS internet. TCP significa Transmission Control Protocol (Protocolo de Controle de Transmissão) e o IP, Internet Protocol (Protocolo de Internet). O método possui 4 camadas, sendo elas: <br><br><br></p><h2> <li> Camada de Aplicação: </li> <br> </h2> <p> A camada de aplicação existe para que o TCP/IP defina qual o tipo ou finalidade daquela transmissão de dados específica, seja ela o carregamento de um site, o upload de arquivo ou o envio de um email, por exemplo. A partir desta definição, o processo é encaminhado para as camadas seguintes. <br> <br> </p> <h2> <li> Camada de Transporte (TCP): <br> <br> </li> </h2> <p> É nesta camada que os dados são divididos em pacotes e numerados, criando uma sequência lógica que será verificada nas camadas seguintes para garantir que o processo seja concluído com processo. Além disso, é a camada de transporte que define para onde os dados devem ser enviados e a que taxa essa transferência deve ser realizada. <br> <br> </p> <h2> <li> Camada de Rede (IP): <br> <br> </li> </h2> <p> Essa camada lida com as interfaces dos hosts e transforma os pacotes de dados em datagramas. Cada datagrama possui dois componentes principais: um cabeçalho (header), contendo o endereço IP da origem e do destino e outros dados relevantes, e a carga útil (payload), que contém os dados em si que estão sendo enviados. <br> <br> </p> <h2> <li> Camada de Interface: <br> <br> </li> </h2> <p> Por fim, a camada de interface — também chamada de camada de enlace de dados ou ligação de dados — lida com a transferência em si dos dados entre os hosts. A camada de interface é responsável, entre outros aspectos, por definir como os dados serão transmitidos, seja por uma conexão cabeada (como Ethernet, por exemplo) ou sem fios (como uma rede Wi-Fi). <br> <br><br> </p><h1>História do TCP/IP: </h1><br><br><p>A história do TCP/IP se confunde com as origens da própria Internet. O conjunto de protocolos foi desenvolvido em 1969, no Departamento de Defesa dos Estados Unidos. Ele fez parte do projeto conhecido como ARPANET — uma tecnologia de comunicação entre computadores que, décadas mais tarde, viria a se tornar a Internet como a conhecemos hoje. O objetivo dos pesquisadores era criar uma tecnologia de comunicação capaz de transmitir grandes volumes de dados em alta velocidade. À época, tal propósito era justificado pelas estratégias militares num período conturbado para os Estados Unidos, em meio à Guerra Fria e a Guerra do Vietnã, e com os receios cada vez mais fortes sobre uma possível guerra nuclear. Felizmente, a guerra nuclear nunca aconteceu, mas o desenvolvimento da tecnologia seguiu — agora, nas gigantes tecnológicas e em universidades dos EUA e do Reino Unido. Um dos primeiros testes do protocolo TCP/IP ocorreu em 1975, entre a Universidade de Stanford, nos Estados Unidos, e a University College London, na Inglaterra.Ao longo das décadas seguintes, o desenvolvimento da tecnologia se juntaria a outros avanços, como a criação do HTTP, para a formação da Internet tal qual ela é conhecida hoje: uma rede mundial de computadores trocando dados e informações de maneira incessante.</h1></div>';
            break;
        case 'OSI':
            document.getElementById('home').style.display = 'none';
            document.getElementById('content').style.display = 'flex';
            document.getElementById('ocean').style.display = 'none';
            document.querySelector('.navbar ul li:nth-child(3)').classList.add('active');
            newText = '<div><h1> O que é OSI? <br> <br> </h1> <p> O modelo Open Systems Interconnection (OSI) é uma estrutura conceitual que divide as funções de comunicação de rede em sete camadas. O envio de dados por uma rede é complexo porque várias tecnologias de hardware e software devem funcionar de forma coesa além das fronteiras geográficas e políticas. <br> <br> </p> <p> O Modelo OSI foi desenvolvido pela International Organization for Standardization (ISO) no final da década de 1970. A ISO é uma organização internacional de padronização que desenvolvem e publicam normas internacionais. Temos as seguintes camadas como parte do modelo: <br> <br> </p> <h2> <li> Camada 1, física: <br> <br> </li> </h2> <p> Nesta camada são especificados os dispositivos, como hubs e os meios de transmissão, como os cabos de rede. Os dados são transmitidos por esses meios e processados na próxima camada. <br> <br> </p> <h2> <li> Camada 2, ligação: <br> <br> </li> </h2> <p> Nesta camada, os dados recebidos do meio físico são verificados para ver se possuem algum erro e, se possuírem, esse erro pode ser corrigido. Dessa forma, as camadas superiores podem assumir uma transmissão praticamente sem erros. Esta camada também controla o fluxo que os dados são transmitidos. Ela possui 2 subcamadas, sendo elas: <br> <br> </p> <h3> MAC: <br> <br> </h3> <p> É esta camada que possibilita a conexão de diversos computadores em uma rede. Cada máquina conectada na rede tem um endereço físico, conhecido como endereço MAC. É esse endereço que a camada utiliza para identificar e enviar os pacotes. <br> <br> </p> <h3> LLC: <br> <br> </h3> <p> É nesta camada que temos o controle de fluxo dos dados na rede. É por conta dela que conseguimos ter vários protocolos da próxima camada convivendo dentro de uma mesma rede. <br> <br> </p> <h2> <li> Camada 3, rede: <br> <br> </li> </h2> <p> É nesta camada que temos o endereçamento IP de origem e de destino, ela também pode priorizar alguns pacotes e decidir qual caminho seguir para enviar seus dados. <br> <br> </p> <h2> <li> Camada 4, transporte: <br> <br> </li> </h2> <p> É esta camada que garante o envio e o recebimento dos pacotes vindos da camada 3. Ela gerencia o transporte dos pacotes para garantir o sucesso no envio e no recebimento de dados. Protocolos muito comuns dessa camada são os protocolos TCP em UDP. O primeiro garante a entrega da mensagem, diferente do segundo. Por não garantir a entrega da mensagem, o protocolo UDP é um pouco mais rápido que o TCP. <br> <br> </p> <h2> <li> Camada 5, sessão: <br> <br> </li> </h2> <p> Esta camada é responsável por estabelecer e encerrar a conexão entre hosts. É ela quem inicia e sincroniza os hosts. Além de realizar o estabelecimento das sessões, esta camada também provém algum suporte a elas, como registros de log e realização de tarefas de segurança. <br> <br> </p> <h2> <li> Camada 6, apresentação: <br> <br> </li> </h2> <p> Esta é a camada responsável por fazer a tradução dos dados para que a próxima camada os use. Nesta camada temos a conversão de códigos para caracteres, a conversão e compactação dos dados, além da criptografia desses dados, caso necessite. <br> <br> </p> <h2> <li> Camada 7, aplicação: <br> <br> </li> </h2> <p> A última camada do modelo OSI é a camada para consumir os dados. Nesta camada, temos os programas que garantem a interação humano-máquina. Nela conseguimos enviar e-mails, transferir arquivos, acessar websites, conectar remotamente em outras máquinas, entre outras coisas. É nesta camada que temos os protocolos mais conhecidos como o HTTP, FTP, além de serviços como o DNS. <br> <br> </p></div>';
            break;
        case 'REF':
            document.getElementById('home').style.display = 'none';
            document.getElementById('content').style.display = 'flex';
            document.getElementById('ocean').style.display = 'none';
            document.querySelector('.navbar ul li:nth-child(4)').classList.add('active');
            newText = '<div><h1>Referências: </h1><br><br><h2>TCP/IP</h2><p>Tec Mundo: <a href="https://www.tecmundo.com.br/o-que-e/780-o-que-e-tcp-ip-.htm">https://www.tecmundo.com.br/o-que-e/780-o-que-e-tcp-ip-.htm</a></p><p>Hostinger: <a href="https://www.hostinger.com.br/tutoriais/tcp-ip">https://www.hostinger.com.br/tutoriais/tcp-ip</a></p><br><br><h2>OSI</h2><p>Amazon: <a href="https://aws.amazon.com/pt/what-is/osi-model/">https://aws.amazon.com/pt/what-is/osi-model/</a></p><br><p>Alura: <a href="https://aws.amazon.com/pt/what-is/osi-model/">https://aws.amazon.com/pt/what-is/osi-model/</a></p></div>';
            break;
        default:
            document.getElementById('home').style.display = 'none';
            document.getElementById('content').style.display = 'none';
            document.getElementById('ocean').style.display = 'none';
            newText = '<p>Conteúdo não encontrado.</p>';
            break;
    }
    document.getElementById('content').innerHTML = newText;
}

