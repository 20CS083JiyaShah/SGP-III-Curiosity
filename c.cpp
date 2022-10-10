#include<iostream>
using namespace std;

static int divide = 0;
static int combine = 0;
static int conquer = 0;
//conquer
void swapping(int &a, int &b) {     //swap the content of a and b
   conquer++; //temp
   int temp;
    conquer++;
   temp = a;
   conquer++;
   a = b;
    conquer++;
   b = temp;
}
void display(int *array, int size) {
   for(int i = 0; i<size; i++)
      cout << array[i] << " ";
   cout << endl;
}

void merge(int *array, int l, int m, int r) {
   int i, j, k, nl, nr;
   //size of left and right sub-arrays
   //divide
   conquer++;
   nl = m-l+1; 
   conquer++;
   nr = r-m;   
   conquer++;
   int larr[nl], rarr[nr];
   //fill left and right sub-arrays
   conquer++;
   for(i = 0; i<nl; i++)
      conquer++;
      larr[i] = array[l+i]; 
      conquer++;
   for(j = 0; j<nr; j++)
      conquer++;
      rarr[j] = array[m+1+j];   
      conquer++;
   i = 0; j = 0; k = l;
   //merge temp arrays to real array
   //combine
   conquer++;
   while(i < nl && j<nr) {
       conquer++;
      if(larr[i] <= rarr[j]) {
          conquer++;
         array[k] = larr[i];
         conquer++;
         i++;
      }else{
          conquer++;
         array[k] = rarr[j];
         conquer++;
         j++;
      }
      conquer++;
      k++;
   }
   conquer++;
   while(i<nl) {       //extra element in left array
      conquer++;
      array[k] = larr[i];
      conquer++;
      conquer++;
      i++; k++;
   }
   conquer++;
   while(j<nr) {     //extra element in right array
   conquer++;
      array[k] = rarr[j];
      conquer++;
      conquer++;
      j++; k++;
   }
   combine++;
}

void mergeSort(int *array, int l, int r) {
    
   conquer++;
   int m;
   conquer++;
   if(l < r) {
      conquer++;
      int m = l+(r-l)/2;
      // Sort first and second arrays
      divide++;
      mergeSort(array, l, m);
      divide++;
      mergeSort(array, m+1, r);
      combine++;
      merge(array, l, m, r);
   }
}
int main() {
   int n;
   cout << "Enter the number of elements: ";
   cin >> n;
   int arr[n];     //create an array with given number of elements
   cout << "Enter elements:" << endl;
   for(int i = 0; i<n; i++) {
      cin >> arr[i];
   }
   cout << "Array before Sorting: ";
   display(arr, n);
   mergeSort(arr, 0, n);     //(n-1) for last index
   cout << "Array after Sorting: ";
   display(arr, n);
   
   cout<<"Divide:"<<divide;
   cout<<"\nConquer:"<<conquer;
   cout<<"\nCombine:"<<combine;
}