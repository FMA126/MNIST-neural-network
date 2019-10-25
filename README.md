# Neural Network Implementation Using MNIST Data

## Goals for project

* Learn about nerual networks
* Implement nerual network
* Optimize to try and minimize error in guessing the correct category of the data

---

## About the MNIST Data

* Training data is 60,000 images of handwritten numbers
* Grey scale
* [MNIST source](http://yann.lecun.com/exdb/mnist/)

## Important Math

### Goal of the whole thing is Gradient decent (minimizing the cost function)

[A Step By Step BackPropagation Example](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/)

![Overview](media/neural_network-basic.png)

One hidden layer neural network

| letter | representation |
| --- | --- |
| I | inputs |
| H | hidden layers |
| O | outputs |
| W | weights |
| B | bias |
| E | error |

#### Net input for node

net = w1 * i1 + w2 * i2 + ... + wn * in

Output(x) = sigmoid(x) ; where x is the net equation

#### Sigmoid function (squash)

<span>&sigma;</span> = 1 / (1 + e<sup>-x</sup>)

#### Error function (squared error)

E<sub>Ototal</sub> = <span style="font-size: 2rem;" >&Sigma;</span> 1/2 (target<sub>O</sub> - output<sub>O</sub>)<sup>2</sup>

#### Gradient with respect to w

<span>&part;</span>E<sub>total</sub> / <span>&part;</span>W = <span style="font-size: 2rem;" >(&Sigma;</span> <span>&part;</span>E<sub>total</sub> / <span>&part;</span>out<sub>O</sub> * <span>&part;</span>out<sub>O</sub> / <span>&part;</span>net<sub>O</sub> * <span>&part;</span>net<sub>O</sub> / <span>&part;</span>out<sub>H</sub><span style="font-size: 2rem;" >)</span> <span>&part;</span>out<sub>H</sub> / <span>&part;</span>net<sub>H</sub> * <span>&part;</span>net<sub>H</sub> / <span>&part;</span>W

#### To update weights:

* <span>&eta;</span> is a learning rate constant

W+ = W + <span>&eta;</span> * <span>&part;</span>E<sub>total</sub> / <span>&part;</span>W

## Overview of the process

### Step 1 backprop

![Step 1](media/step-1.png)

### Step 2 backprop

![Step 2](media/step-2.png)
