# Perception.AI

Perception.AI is a text-to-image project, in which Attention GAN has been implemented. It takes in image caption as an input, and the GAN model generates a corresponding image. This is a collaborative project by [Anshika Gupta](https://github.com/iamanshika), [HarshVardhan Goyal](https://github.com/HarshVardhanGoyal), [Meghana Sarikonda](https://github.com/meghanasarikonda), and [Vishnu M](https://github.com/vishnu701).

## Introduction

Automatic synthesis of realistic images from text would be interesting and useful, and we could witness some AI systems in recent years such as GAN-INT-CLS, which is an RNN encoder with GAN decoder that came out in 2016 was the first paper to propose the Idea of text to image using generative adversarial modeling. However, in recent years generic and powerful recurrent neural network architectures have been developed to learn discriminative text feature representations. Meanwhile, deep convolutional generative adversarial networks (GANs) have begun to generate highly compelling images of specific categories, such as faces, album covers, and room interiors, such as GAWWN, StackGANs, etc.

## Goal

In this project, we propose to implement a text-to-image adversarial generative model that allows attention-driven, multi-stage refinement for fine-grained text-to-image generation. 

There is a serious predicament of class imbalance in Artificial Intelligence and with Perception.AI, we aim to solve this problem by generating images for rare classes which otherwise occur infrequently, or not at all.

## Dataset

We used the Caltech-UCSD Birds 200 (CUB-200) dataset. It is an image dataset with photos of 200 bird species (mostly North American).

![image and corresponding caption] (assets\cub data example.JPG)

With approximately 12 thousand images and one bounding box per image for object detection, it also has 10 captions corresponding to each image.

