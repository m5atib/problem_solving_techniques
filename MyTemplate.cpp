#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef unsigned int ui;
typedef double dd;
typedef unsigned long long ull;
typedef long double ld;
typedef stack<int> si;
typedef stack<ll> sll;
typedef stack<string> stackStr;
typedef vector<int> vi;
typedef vector<bool> vb;
typedef vector<vi> vvi;
typedef vector<string> vs;
typedef vector<char> vc;
typedef vector<ll> vll;
typedef vector<ull> vull;
typedef pair<int, int> pii;
typedef tuple<int, int, int> tiii;
typedef tuple<ll, ll, ll> tlll;
typedef pair<ll, ll> pll;
typedef vector<tiii> vtiii;
typedef vector<tlll> vtlll;
typedef vector<pii> vpii;
typedef vector<pll> vpll;
typedef map<string, int> mpsi;
typedef map<int, int> mpii;
typedef map<string, string> mpss;
typedef map<int, string> mpis;
typedef map<char, int> mpci;

#define IOS                           \
    ios_base::sync_with_stdio(false); \
    cin.tie(NULL);                    \
    cout.tie(NULL)
#define pq priority_queue
#define F first
#define S second
#define fspn(x) fixed << setprecision(x)
#define PB push_back
#define MP make_pair
#define rep(i, a, b) for (int i = a; i <= b; i++)
#define REPst(j, a, b) for (size_t j = a; j <= b; ++j)
#define VPTR(it, v) for (auto it = v.begin(); it != v.end(); ++it)
#define SQ(a) (a) * (a)
#define CUBE(a) (a) * (a) * (a)
#define printMap(elem)                                   \
    for (auto it = elem.begin(); it != elem.end(); it++) \
    cout << it->first << "[" << it->second << "]\t"
#define printVec(v)     \
    VPTR(it, v)         \
    cout << *it << " "; \
    cout << endl

#define rVPTR(it, d) for (auto it = d.rbegin(); it != d.rend(); ++it)
#define fibo(n) (pow((1 + sqrt(5)), n) - pow((1 - sqrt(5)), n)) / (pow(2, n) * sqrt(5))
#define cont continue
#define inarr(arr, n) REP(i, 0, n - 1) cin >> arr[i]
#define Areverse(arr) reverse(arr.begin(), arr.end())
#define sortA(st) sort(st.begin(), st.end())
#define sortD(st) sort(st.begin(), st.end(), greater<int>())
#define XposBS(arr, x) lower_bound(arr.begin(), arr.end(), x) - arr.begin()
#define pqD pq<int, vector<int>, greater<int>>
#define pqi pq<int>
#define summation(n) (((n) * ((n) + 1)) / 2)
#define bits bitset<10>
#define printArr(arr, n)                    \
    rep(i, 0, n - 1) cout << arr[i] << " "; \
    cout << endl
#define mod10p9 1000000007;

int main()
{
    IOS;
    freopen("input.txt", "r", stdin);
    cout << "Hello, World!" << endl;
}
