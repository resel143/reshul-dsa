#include<iostream>
#include<map>
#include<string>

using namespace std;


int main(){
	long long r;
	cin>>r;
	
	while(r>0){
		
		long long int n, i;
		cin>>n;
		
		string s1, s2;
		cin>>s1;
		cin>>s2;
		
		
		map<char, long long int> s1Count, s2Count;
		
		for(i=0;i<n;i++){
			
			if(s1Count.find(s1[i]) != s1Count.end()){
				s1Count[s1[i]]++;
			}else{
				s1Count[s1[i]]=1;
			}
			
			if(s2Count.find(s2[i])!= s2Count.end()){
				s2Count[s2[i]]++;
			}else{
				s2Count[s2[i]]=1;
			}
			
		}
		
		long long int counter=0;
		
		for(auto p: s2Count){
			if(s1Count.count(p.first)){
				if(s1Count[p.first] == p.second){
					counter++;
				}
			}
		}
		
		
		if(counter == s2Count.size()) cout<<"YES"<<endl;
		else cout<<"NO"<<endl;
		
		
		r--;
	}
}