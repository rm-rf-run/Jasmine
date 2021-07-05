<footer id="footer">
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">聊天室</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    啥也没有
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="to-top" style="display: none; background-position-x: -40px;"></div>
    <!--foot-->
    <div id="foot">
		<?php do_shortcode( '[footData]' ) ?>
    </div>
</footer>
<script type="text/javascript" id="support" src="https://cdn.jsdelivr.net/gh/rm-rf-run/jasmine/inc/js/support.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/rm-rf-run/jasmine/assets/js/customized.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/rm-rf-run/jasmine/assets/js/mobile-customized.js"></script>
<?php if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) { ?>
    <script type='text/javascript' src='/wp-includes/js/comment-reply.min.js'></script>
<?php } ?>
<?php wp_footer(); ?>
</body>
</html>