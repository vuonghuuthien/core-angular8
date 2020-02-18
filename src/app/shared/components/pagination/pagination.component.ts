import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    @Output('onPaginate') onPaginate: EventEmitter<number> = new EventEmitter();
    public pageLen = 20;
    public curPage = 1;
    public html = '';

    constructor() {
    }

    ngOnInit() {
        this.curPage = +localStorage.getItem('curPage') || 1;
    }

    render(curPage, item, first) {
        let html = '', separatorAdded = false;
        // check render first page
        if (curPage === 1) {
            html += '<li class="page-item pagination-pre disabled pointer-none" ><a class="page-link" >Previous</a></li>';
        } else {
            html += '<li class="page-item pagination-pre"><a class="page-link" >Previous</a></li>';
        }
        const that = this;
        item.forEach((el, i) => {
            if (that.isPageInRange(curPage, i, that.pageLen, 2, 2)) {
                if (curPage === item[i]) {
                    html += '<li class="page-item active" data-page="' + item[i] + '">' +
                        '<a class="page-link" data-page="' + item[i] + '">' + item[i] + '</a</li>';
                } else {
                    html += '<li class="page-item" data-page="' + item[i] + '">' +
                        '<a class="page-link" data-page="' + item[i] + '">' + item[i] + '</a</li>';
                }
                // as we added a page, we reset the separatorAdded
                separatorAdded = false;
            } else {
                if (!separatorAdded) {
                    // only add a separator when it wasn't added before
                    html += '<li class="separator page-item" />';
                    separatorAdded = true;
                }
            }
        });
        const holder = $('#holder');
        // check render last page
        if (that.curPage >= that.pageLen) {
            this.html = html + '<li class="page-item pagination-next disabled pointer-none"><a class="page-link" >Next</a></li>';

        } else {
            this.html = html + '<li class="page-item pagination-next"><a class="page-link" >Next</a></li>';
        }
        if (first) {
            holder.on('click', '.pagination-pre', function () {
                that.curPage = that.curPage - 1;
                localStorage.setItem('curPage', that.curPage + '');
                // that.getAllDiary(that.curPage, false);
                that.onPaginate.emit(that.curPage);
            });
            holder.on('click', '.pagination-next', () => {
                that.curPage = that.curPage + 1;
                localStorage.setItem('curPage', that.curPage + '');
                that.onPaginate.emit(that.curPage);
            });
            holder.on('click', (e) => {
                if (!e.target.getAttribute('data-page')) {
                    // no relevant item clicked (you could however offer expand here )
                    return;
                }
                curPage = +e.target.getAttribute('data-page');
                that.curPage = curPage;
                localStorage.setItem('curPage', that.curPage + '');
                that.onPaginate.emit(that.curPage);
            });
        }
    }

    isPageInRange(curPage, index, maxPages, pageBefore, pageAfter) {
        if (index <= 1) {
            // first 2 layout
            return true;
        }
        if (index >= maxPages - 2) {
            // last 2 layout
            return true;
        }
        if (index >= curPage - pageBefore && index <= curPage + pageAfter) {
            return true;
        }
    }

    init(pageLen, isfirst) {
        const item = [];
        for (let i = 1; i <= pageLen; i++) {
            item.push(i);
        }
        this.render(this.curPage, item, isfirst);
    }

// call from parent
    setUpCallFromParent(pageLen: number, curPage: number, isFirst) {
        this.pageLen = pageLen;
        this.curPage = curPage;
        localStorage.setItem('curPage', this.curPage + '');
        this.init(pageLen, isFirst);
    }
}
