<script lang="js">
    export let data;
</script>

<style lang="postcss">
    TABLE {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
        border-collapse: collapse;
        border-spacing: 0;

        THEAD {
            background-color: rgb(249, 249, 249);
            TR {
                TH {
                    font-size: 0.9em;
                    height: 36px;
                    font-weight: 600;
                }
            }
        }

        TBODY {
            TR {
                border-top: 1px solid #eee;

                &:hover {
                    background-color: #fafafa;
                }
                TD {
                    height: 4em;
                    padding: 0 1em;
                    font-size: 1em;
                    line-height: 1.5em;
                }
            }
        }
    }
</style>

<table>
    <thead>
        <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
        </tr>
    </thead>
    <tbody>
        {#each data.users as user}
        <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
        </tr>
        {/each}
    </tbody>
</table>
