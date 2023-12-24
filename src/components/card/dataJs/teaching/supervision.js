const superList = [
    {
        name: "Alessandro Rizzo (MSc)",
        when: "March 2023 - February 2024",
        course: "Master’s Degree in Artificial Intelligence, University of Bologna, Italy",
        title: "Quantum Convolutional Neural Networks for Particle Identification in High Energy Physics",
        abstract: "This master’s thesis explores the application of Quantum Convolutional Neural Networks (QCNNs) to the task of particle identification in the field of High Energy Physics (HEP). The study investigates the potential advantages offered by QCNNs in handling complex particle identification challenges, leveraging both quantum computing principles and convolutional neural network architectures. Through experimentation and analysis, the thesis aims to shed light on the efficacy and feasibility of integrating quantum computing into particle identification processes, with implications for advancing the capabilities of HEP experiments and detectors.",
    },
    {
        name: "Francesco Aldo Venturelli (MSc)",
        when: "February 2023 - December 2023",
        course: "Master’s Degree in Physics, University of Bologna, Italy",
        title: "Quantum Convolutional Neural Networks for Data-Efficient Image Classification",
        abstract: "This master’s thesis delves into the realm of Quantum Convolutional Neural Networks (QCNNs) and their application to data-efficient image classification tasks. The research explores the potential of QCNNs to significantly enhance the efficiency of image classification models, capitalizing on the synergy between quantum computing principles and convolutional neural network architectures. Through rigorous experimentation and analysis, the thesis aims to demonstrate the advantages of quantum computing techniques into image classification processes, offering promising insights for achieving data-efficient and accurate image recognition systems.",
    },
    {
        name: "Akash Shina (MSc)",
        when: "September 2022 - October 2023",
        course: "Master of Science, Saarland Informatics Campus, Saarland University, Germany",
        title: "On Quantum Deep Reinforcement Learning for Collision-Free Navigation in Self-Driving Cars",
        abstract: "TCollision-free navigation (CFN) for self-driving cars poses a challenging optimization problem, with notable advancements in approximate solutions using deep reinforcement learning. Quantum computing has gained renewed attention, including within the automotive industry. Quantum reinforcement learning (QRL) techniques show promise for faster training, especially in simplified domains. However, these methods have not yet been applied to real-world CFN scenarios and would typically demand an onboard quantum device for testing. This thesis introduces Nav-Q, the first QRL approach for CFN, outlining the potential advantage wirt respect to classical algorithms and presenting a comparative assessment against classical alternatives.",
    },
    {
        name: "Lorenzo Cellini (MSc)",
        when: "September 2022 - March 2023",
        course: "Master’s Degree in Physics, University of Bologna, Italy",
        title: "QAL-BP: Quantum Augmented Lagrangian Approach to the Bin Packing",
        abstract: "This thesis introduces QAL-BP, a Quadratic Unconstrained Binary Optimization (QUBO) framework tailored for bin packing, suitable for quantum computation. QAL-BP merges augmented Lagrangian methodology, embedding bin packing constraints in the objective function while analytically estimating penalty multipliers. This yields a versatile model that eliminates instance-dependent Lagrangian coefficients, often needed in other QUBO formulations. We evaluate our method on bin-packing instances using a real Quantum Annealing device and compare it with simulated annealing and Gurobi classical solvers.",
    },
    {
        name: "Supreeth Mysore Venkatesh (MSc)",
        when: "August 2021 - October 2022",
        course: "Master’s Degree in Mathematics and Computer Science, Saarland University, Germany",
        title: "On Quantum Coalition Structure Generation",
        abstract: "This thesis develops and assesses hybrid quantum-classical algorithms for solving the NP-hard coalition structure generation (CSG) problem in cooperative game theory. The first algorithm, BILP-Q, offers solutions for general coalitional games and is compatible with gate-based quantum computing and quantum annealing. It surpasses state-of-the-art classical solutions in time/gate complexity. The second proposed method, GCS-Q, addresses CSG in Induced Subgraph Games using quantum annealing. GCS-Q excels over current classical and quantum alternatives in runtime. Lastly, the third approach, QuACS, follows GCS-Q’s strategy but employs gate-based quantum computation.",
    },
    {
        name: "Matteo Antonio Inajetovic (MSc)",
        when: "February 2021 - July 2022",
        course: "Master’s Degree in Artificial Intelligence, University of Bologna, Italy",
        title: "Variational Quantum Splines: Moving Beyond Linearity for Quantum Activation Functions",
        abstract: "Activation functions play a crucial role in neural networks since they allow the learning of complex and non-trivial patterns in the data. However, the unitarity constraint of quantum operators forbids non-linearity and poses a considerable obstacle to developing powerful quantum machine learning models. Recently, the idea of the QSplines has been proposed to approximate a non-linear activation function by implementing the quantum version of the spline functions using a fault-tolerant quantum algorithm. This thesis proposes the Variational Quantum Splines, which use hybrid quantum-classical optimization to approximate non-linear activation functions using near-term quantum computing. The idea of Variational QSplines proposed in the thesis has been published as a conference paper.",
    },
    {
        name: "Filippo Orazi (MSc)",
        when: "September 2021 - March 2022",
        course: "Master’s Degree in Artificial Intelligence, University of Bologna, Italy",
        title: "Development and evaluation of the Multiple Aggregator Quantum Algorithm",
        abstract: "This thesis extends and implements the generalized version of the quantum Single Layer Perceptron using the Multiple Aggregator Quantum Algorithm. Experiments show that the proposed generalized qSLP outperforms the existing full quantum machine learning model already implemented in the IBM Qiskit framework on standard benchmark datasets. The generalized qSLP has been published as conference paper.",
    },
    {
        name: "Nicolò Cangini (MSc)",
        when: "January 2019 - July 2019",
        course: "Master’s Degree in Computer Engineering, University of Bologna, Italy",
        title: "Quantum Supervised Learning: Algorithms and Implementation",
        abstract: "This thesis introduces the fundamentals of quantum computing, with an emphasis on utilizing quantum algorithms for supervised learning. It encompasses both theoretical exploration and practical experimentation, conducted within the IBM Qiskit environment, enabling simulations of actual quantum computers.",
    },
];
export default superList;