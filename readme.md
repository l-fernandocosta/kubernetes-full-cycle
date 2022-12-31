### O que é o Kubernetes ?
Kubernetes (K8S) é um produto Open Source utilizado para automatizar a implantação, o dimensionamento e o gerenciamento de aplicatos em container.

### Da onde veio ?
 - Criado pela google.
 - Borg
 - Omega
 - Kubernetes

### Pontos importantes
 - Kubernetes é disponibilizado através de um conjunto de APIs
 - Normalmente acessamos a API usando a CLI: kubectl
 - Tudo é baseado em estado. Você configura o estado de cada objeto
 - Kubernetes Master
 - Kube-apiserver
 - Kube-controller-manager
 - Kube-scheduler
 - Outros nodes:
 - Kubelet
 - Kubeproxy
 - Dinâmica superficial
 - Cluster: Conjunto de máquinas ( nodes )
 - Cada máquina possui uma quantidade de vCPU e memória

- Pods: 
   - Unidade que contém os containers provisionados
   - Pod representa os processos rodando no cluster

- Services
   - É uma forma de agregar um conjunto de pods para então implementar políticas de visibilidade.

- Replica Set
   -  São replicas dos pods

- Selector 
   - Responsável por filtrar todos os pods que estão incorporados ao serviço

- Target Port vs Port
   
   `Antes de exemplificar é necessário entender os conceitos por trás do port e targetPort`
   
   `Quando declaramos um port em nosso service.yaml, este será responsável pela porta do NOSSO SERVICE`

   `Quando declaramos um targetPort, esta será a porta que será responsável pelo redirecionamento (container) a um dos nossos pods`

   - O targetPort tem como funcionalidade redirecionar para a porta desejada dentro do meu container.
    
   - E.G Toda vez que acessar o port `:80` redirecionaremos usando o targetPort `:8000` que foi a porta 
   que foi exposta no meu container.

- NodePort
   -  Associa uma port ( 30000 > < 32767 ) à todos os seus nodes;
   -  Gera uma porta e libera essa porta a todos os nodes do seu cluster; 
   -  Rara utilização


- LoadBalancer
   - Utilizado em cluster gerenciados;
   - Gera um IP para você acessar sua aplicação de fora;
   - Cluster kubernetes que está conectado a um provedor de nuvem; 
