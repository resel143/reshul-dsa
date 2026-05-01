#include<iostream>
#include<algorithm>
#include<vector>
#include<set>

using namespace std;


int main(){
	int r;
	cin>>r;
	while(r>0){
		
		long long int i,j,n,k, sum=0;
		cin>>n>>k;
		long long int arr1[n], arr2[n], currCount=0;
		vector<long long> negOneArr;
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
			if(arr2[i]==-1) negOneArr.push_back(i);
		}
		
		if(sumArr.size()>1) cout<<0<<endl;
		
		else{
			
			if(negOneArr.size() == n){
				// Sum same hai, multiple output Arrays ban sakte hai - yani saare arr2 -1 hai
			
				sort(arr1, arr1+n);
				cout<<(k-arr1[n-1]+1+arr1[0])<<endl;
			}else{
				// Sum same hai for the array and check ki -1 wali values update ho sakti hai ya nahi
		
				sum = *sumArr.begin();
				
				for(i=0;i<negOneArr.size();i++){
					if((sum - arr1[negOneArr[i]])>=0 && (sum - arr1[negOneArr[i]]) <= k ) currCount++;
				}
				
				if(currCount == negOneArr.size()) cout<<1<<endl;
				else cout<<0<<endl;
			}
			
		}	
		
		
		r--;
	}
}