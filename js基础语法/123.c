#include <stdio.h>
#include <stdlib.h>
typedef int datatype;
typedef struct node{
	datatype data;
	struct node *next;
}LNode,*LinkList;
LinkList CreateLinkList(int *,int);
LinkList Union(LinkList la,LinkList lb);
LinkList intersection(LinkList la,LinkList lb);
LinkList differnce(LinkList la,LinkList lb);
void outputLinkList(LinkList L);
int main()
{ int i=0;
  LNode *p;
  LinkList A,B,C,D,E;
  int a[]={20,30,40,50,60,70,80,90,100};
  int b[]={15,20,25,40,45,60,65,75,85,95};
  A=CreateLinkList(a,9);
// 
  B=CreateLinkList(b,10);
 // outputLinkList(B);
  /*计算集合的并*/
  printf("并集:\n");
  C= Union(A,B);
 outputLinkList(C);
  /*计算集合的交*/ 
   outputLinkList(A);
   printf("交集:\n");
  D= intersection(A, B);
 outputLinkList(D);
  /*计算集合的差*/
   printf("差集:\n");
  E=differnce(A, B);
 outputLinkList(E);
}
/*根据数组数据创建链表存储结构*/
LinkList CreateLinkList(int a[],int n)
{ int i;
  LNode *pre,*p;
  LinkList L;
  L=pre=(LNode *)malloc(sizeof(LNode));
  for(i=0;i<n;i++)
  {  p=(LNode *)malloc(sizeof(LNode));
     p->data=a[i];
	 pre->next=p;
	 pre=p;
	 }
  pre->next=NULL;
  return(L);
}
 
/*集合的并运算*/
LinkList Union(LinkList la,LinkList lb)
{ LNode *pre,*p,*q,*s;
  LinkList L;
  p=la->next;
  q=lb->next;
  L=pre=(LNode *)malloc(sizeof(LNode));
  while(p&&q)
  { 
    s=(LNode *)malloc(sizeof(LNode));
	  if(p->data<q->data)
	   { /*把A集合当前元素放入结果集合中*/
			s->data=p->data;
			pre->next=s;
			pre=s;
			p=p->next;
	     }
	  else if(p->data==q->data)
	   { /*把A集合当前元素放入结果集合中*/
       /*丢掉集合B当前元素*/
		s->data=p->data;
			pre->next=s;
			pre=s;
			p=p->next;
			q=q->next;
	    }
	  else 
{ /*把B集合当前元素放入结果集合中*/
    s->data=q->data;
      pre->next=s;
      pre=s;
      q=q->next;
	    }
  }
 /*处理未处理完的链表*/
 p=p?p:q;
 while(p)
 {  
 pre->next=p;
 pre=p;
 p=p->next;
}
 pre->next=NULL;
 return(L);
}
/*集合的交运算*/
LinkList intersection(LinkList la,LinkList lb)
{ LNode *pre,*p,*q,*s;
  LinkList L;
  p=la->next;
  q=lb->next;
  L=pre=(LNode *)malloc(sizeof(LNode));
  while(p&&q)
  { 
	 if(p->data<q->data)
	  { /*丢掉A中当前元素*/
		p=p->next;
     }
	else if(p->data==q->data)
	{ s=(LNode *)malloc(sizeof(LNode));
    /* 把A中当前元素加入到结果集合中，丢掉B集合中当前元素*/
		s->data=p->data;
		pre->next=s;
		pre=s;
		p=p->next;
		q=q->next;
	}
	else 
{ /*丢掉B中当前元素*/
	  q=q->next;
 
    }
	}
 pre->next=NULL;
 return(L);
}
/*集合的差运算*/
LinkList differnce(LinkList la,LinkList lb)
{ LNode *pre,*p,*q,*s;
  LinkList L;
  p=la->next;
  q=lb->next;
  L=pre=(LNode *)malloc(sizeof(LNode));
  while(p&&q)
  { 
	if(p->data<q->data)
	 { /* 把A中当前元素加入到结果集合中*/
		s=(LNode *)malloc(sizeof(LNode));
		s->data=p->data;
		pre->next=s;
		pre=s;
		p=p->next;
	} 
	else if(p->data==q->data)
	{  /*丢掉A中当前元素*/
/*丢掉B中当前元素*/
		p=p->next;
		q=q->next;
	}
	else 
	{ 
	q=q->next;
	  /*丢掉B中当前元素*/	}
  }
/*如果A集合中还有剩余元素，把剩余元素放到结果集合中*/
while(p)
 {  
pre->next=p;
pre=p;
p=p->next;
 } 
 pre->next=NULL;
 return(L);
}
/*输出链表的值*/
void outputLinkList(LinkList L)
{ int i=0;
  LNode *p;
  p=L->next;
  while(p)
  { printf("%-6d",p->data);
    p=p->next;
    i++;
	if(i%10==0) printf("\n");
  }
printf("\n");
}