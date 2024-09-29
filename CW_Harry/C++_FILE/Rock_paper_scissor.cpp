#include<iostream>
#include<cstdlib>
#include<ctime>
#define ROCK 1
#define PAPER 2
#define SCISSOR 3
using namespace std;
int main()
{
    srand((unsigned int)time(NULL));

    int player_throw=0;
    int ai_throw=0;
    bool draw=false;
    do{
        cout<<"select your throw"<<endl;
         cout<< "1) Rock"<<endl;
          cout<<"2)Paper"<<endl;
           cout<<"3)Scissor"<<endl;
            cout<<"selection"<<endl;
            cin>>player_throw;
            cout<<endl;

            ai_throw= (rand() %3 )+1;
            if(ai_throw==ROCK)
            {
                cout<<"ai trows rock"<<endl;
            }
            else if (ai_throw==PAPER)
            {
               cout<<"ai thows paper"<<endl;
            }
            else if (ai_throw==PAPER)
            {
               cout<<"ai thows paper"<<endl;
            }
            else if (ai_throw==SCISSOR)
            {
               cout<<"ai thows SCISSOR"<<endl;
            }
            draw = false;
            if( player_throw==ai_throw)
            {
                draw=true;
                cout<<"draw play again"<<endl;
            }
            else if( player_throw==ROCK && ai_throw==SCISSOR)
            {
                
                cout<<"ROCK BEATS SCISSOR. YOU WIN."<<endl;
            }
            else if( player_throw==ROCK && ai_throw==PAPER)
            {
                
                cout<<"paper BEATS rock. YOU lose."<<endl;
            }
            else if( player_throw==PAPER && ai_throw==ROCK)
            {
                
                cout<<"PAPER BEATS ROCK. YOU WIN."<<endl;
            }
             else if( player_throw==PAPER && ai_throw==SCISSOR)
            {
                
                cout<<"SCISSOR BEATS PAPER. YOU LOSE."<<endl;
            }
              else if( player_throw==SCISSOR && ai_throw==PAPER)
            {
                
                cout<<"SCISSOR BEATS PAPER. YOU WIN."<<endl;
            }
              else if( player_throw==SCISSOR && ai_throw==ROCK)
            {
                
                cout<<"ROCK BEATS SCISSOR. YOU LOSE."<<endl;
            }
            cout<<endl;
            // rand() 0....99999    3%    0-2+1-->-1-3
            //10/3=1(rem)
            //11/3=2


    }while(draw);

} // namespastd;

