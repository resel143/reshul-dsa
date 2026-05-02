#include<iostream>
#include<cmath>

using namespace std;


int main(){
	int r;
	cin>>r;
	while(r>0){
		long long int sum=0, root, n, i, happy=0;
		cin>>n;
		long long int arr[n];
		
		for(i=0;i<n;i++) cin>>arr[i];
		
		for(i=0;i<n;i++){
			sum+=arr[i];
			
			root = sqrt(sum);
			
			if(root%2==1 && root * root == sum) happy++;
		}
		cout<<happy<<endl;
		
		
		r--;
	}
}
