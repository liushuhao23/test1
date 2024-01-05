/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2024-01-04 17:04:28
 * @LastEditors: liushuhao
 * @LastEditTime: 2024-01-04 17:07:55
 */
type TaskFunction = () => Promise<any>;

export class TaskQueue {
    private queue: TaskFunction[] = [];
    private maxConcurrentTasks: number;
    private runningTasks = 0;

    constructor(maxConcurrentTasks: number) {
        this.maxConcurrentTasks = maxConcurrentTasks;
    }

    addTask(task: TaskFunction) {
        this.queue.push(task);
        this.runNextTask();
    }

    private runNextTask() {
        if (this.runningTasks < this.maxConcurrentTasks && this.queue.length > 0) {
            const task = this.queue.shift()!;
            this.runningTasks++;
            task().then((res) => {
                console.log('输出res',  res)
                // this.runningTasks--;
                // this.runNextTask();
            }).catch(() => {
                this.runningTasks--;
                this.runNextTask();
            });
        }
    }
}
