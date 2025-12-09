# AI

提升生产力的利器，带来更多的可能

## 第一阶段: 数学与编程

### AI 数学三支柱

- 线性代数：重点是向量、矩阵、张量、特征值、奇异值分解。理解数据和模型结构。
- 微积分：理解模型如何`学习`的关键。重点是导数、梯度、链式法则。优化算法的灵魂。
- 概率与统计：让模型学会`推断`。重点是概率分布、贝叶斯定理、期望与方差、假设检验。处理不确定性、完成分类任务的基础。

### 编程工具

Python‌：AI 领域的绝对主流。

关键库：‌NumPy‌ (科学计算)、‌Pandas‌ (数据处理)、‌Matplotlib/Seaborn‌ (数据可视化)。

## 第二阶段：机器学习

[machine-learning-yearning-cn](git@github.com:deeplearning-ai/machine-learning-yearning-cn.git)

监督学习:从`线性回归`‌、‌`逻辑回归`入门，理解模型、损失函数、优化的基本套路。然后进阶到决策树、随机森林、支持向量机(SVM)‌。

无监督学习：掌握聚类(如 K-Means)和降维 ‌(如 PCA)的思想与实现。

模型评估与优化：学会用准确率、精确率、召回率等指标评估模型，并理解交叉验证、超参数调优。

学习资源：

课程：吴恩达的《Machine Learning》。

书籍：《Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow》实践性极强。

这个阶段要多动手，使用 ‌Scikit-learn‌ 库去复现每一个算法，在真实数据集（如 Kaggle 入门赛）上练习。理解“为什么这个模型在这里有效”。

## 第三阶段：深度学习

[deeplearning_ai_books](https://github.com/fengdu78/deeplearning_ai_books)

当经典 ML 无法满足复杂任务（如图像、语音、自然语言）时，深度学习就是你的答案。

神经网络基础：从多层感知机(MLP)‌ 开始，理解前向传播、反向传播、激活函数、优化器的本质。

核心网络结构：

- 卷积神经网络(CNN)‌：计算机视觉的基石。必须掌握其原理，并在图像分类等项目中使用。

- 循环神经网络(RNN) & LSTM‌：处理序列数据（如文本、时间序列）的利器。

- Transformer‌：当前 NLP 乃至多模态领域的统治性架构。这是你深入现代 AI 必须攻克的堡垒，理解自注意力机制是其关键。

框架选择：

- PyTorch‌：目前学术界和工业界的首选，动态图设计，非常灵活、Pythonic。

- TensorFlow‌：在工业级部署中依然有重要地位。

先专注于 ‌PyTorch‌。找一些经典的模型（如 LeNet, ResNet, BERT 的简化版）亲手实现一遍。

## 第四阶段：垂直领域

选择一个方向深耕

- 自然语言处理：深入理解 Transformer、BERT、GPT 等大模型。学习 Tokenizer、微调、Prompt 工程等。
- 计算机视觉：研究目标检测（YOLO）、图像分割、生成模型（扩散模型、GAN）。
- 强化学习：从 Q-learning、Policy Gradients 入手，探索更自主的 AI 决策。
- AI 与其他领域交叉：如 AI for Science（生物、材料）、AI 运维等。
