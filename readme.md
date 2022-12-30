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

### Utilizando ClusterIP
