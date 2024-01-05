/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2024-01-04 13:37:47
 * @LastEditors: liushuhao
 * @LastEditTime: 2024-01-05 09:23:49
 */
const checkHandler = (queue: unknown) => {
    if (!queue) throw new Error('queue is not defined');
    if (Object.prototype.toString.call(queue) !== '[object Function]') {
        throw new Error('queue is not a function');
    }
};


export class TaskQueue {
    queueList: any[] = []; // 队列列表
    maxSize = 5; // 最大并发数
    running = 0; // 当前正在执行的任务数
    constructor(maxSize: number) {
        this.maxSize = maxSize;
    }
    addTask (task: any) {
      checkHandler(task)
      this.queueList.push(task);
      this.run();
    }
    run () { 
        if (this.running >= this.maxSize  || !this.queueList.length) return;
        this.running++;
        const task = this.queueList.shift();
        task().then((res: any) => {
            console.log(res)
        }).catch((error: undefined) => {
            // console.log(error);
        }).finally(() => {
            this.running--;
            this.run();
        })
    }
}

