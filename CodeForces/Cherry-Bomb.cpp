#include<iostream>
#include<algorithm>
#include<set>

using namespace std;


int main(){
	int r;
	cin>>r;
	while(r>0){
		
		long long int i,j,n,k, sum=0;
		cin>>n>>k;
		long long int arr1[n], arr2[n];
		set<int> sumArr;
		for(i=0;i<n;i++){
			cin>>arr1[i];
		}
		for(i=0;i<n;i++){
			cin>>arr2[i];
		}
		
		// Different sum honge to reject krde pehle hi
		for(i=0;i<n;i++){
			if(arr2[i]!=-1){
				sumArr.insert(arr1[i]+arr2[i]);
			}
		}
		if(sumArr.size()>1) cout<<0<<endl;
		
		
		
		
		
		r--;
	}
}