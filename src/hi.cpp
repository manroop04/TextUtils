// Write a program to insert an element in a BST.
#include <iostream>
using namespace std;
  
struct node {
    int data;
    node* left;
    node* right;
};
  
node* CreateNewNode(int n) {
    node* newNode = new node();
    newNode->data = n;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}
  
node* Insert(node* root, int n) {
    if (root == NULL) {
        root = CreateNewNode(n);
        return root;
    } else if (n < root->data) {
        root->left = Insert(root->left, n);
    } else {
        root->right = Insert(root->right, n);
    }
    return root; 
}
  
void InorderTraversal(node* root) {
    if (root == NULL) {
        return;
    }
    InorderTraversal(root->left);
    cout << root->data << " ";
    InorderTraversal(root->right);
}
  
int main() {
    node* root = NULL;
    root = Insert(root, 6);
    root = Insert(root, 3);
    root = Insert(root, 9);
    root = Insert(root, 1);
    root = Insert(root, 4);
    root = Insert(root, 8);
    root = Insert(root, 10);
  
    cout << "Inorder Traversal after insertion: ";
    InorderTraversal(root);
  
    return 0;
}
