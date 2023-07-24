function Access(){
    return(
        <>
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAADGCAMAAADFYc2jAAAA3lBMVEX///8AAAD///3+/v8lJigAAAP8/PwiIyVFRkguLjAcHR8pKiwfICIyMjQrLC47Oz3y8vISExV5eXrj4+M1NTe9vb7p6enKysvExMRWVlgVFhjc3N0/QEJHSE1PUFKenp/T09SJiYqqqqpbXGGTk5SFhYVRUle0tLRjY2QjIiilpaU7PEErKjBCQkNsbG2vr69xcXIAAAxLS0sbGiFbWV8UExo3NjwaGhlfX192dnxiYWdmZ2YyMDeSkpFHTFNBQklYO0FNJCeDIzBPQUE3JiVbKy83QENVQEheO0I9MTDcM5bhAAAWHUlEQVR4nOVdCXeiwJammn2nEFCQVXFBELdIm8R+vpl5s/3/PzSFW9BEJWmNkfnO6Y7Bitate+tudasKw64KHMMovzfSm+vffv267qf/dOBYYwFF244jblz//0c+ZYpuu93vt9tdJ8ma9+7Od8PtPrVf+mmavr4unpzk3t35ZvSA/dJ+SXO8vPRNzd88rumepzeUu3btO8DCrN1uv2zQXzA6eqY0OgvTXKi6Z9y7ezdGDUDNRPL/1F7DdFUv7KQmM5QgJEzdu3f/bowWIGOHcZzuBq5rdlcM4zAcJAEgxnrF2R9CaGuybA+HaAxyLJPl6skUBUiSwFrotXt38LYILFGTWFHUNDmW5ThezZP4pc2IXE4+129R9+7gbeEJEk8QvCSxCKKYZfO4/dKNiZx6klB79+7fTfELawJaoIkd+CRKujn1FpmTrw30e/fw1jDhhnyaRuMgEJxsunEEYU4+dMNH03xNvTVqfKbTBuBy8nmeoAWO4+ihLa55n2u+fnizft4ElJm53a6z7H5izjYAnVOf04/IJyQ+13pr8uGjkT9+esnd95cnx/FL/5EOrJx+KWc/tCwIwZZ8SwseSvHX+Tx027jvGXLY8By/fl2KYZsi4NbST0My93Z2INngoVTf0EVeGxqBNf0DbE01jmGXI3jdBCTkILdm+pZ29ELoDx5I99U5hmGm+Qig6KXbLEH2GxQ9WHQIJPcb4mlWyOeAGI5u1turo6PJmmzbyH3tdttdH1N6wXP6HJYIW3E8/7+ucVvWE8j4J+inZY4eJ/8hizm03IVnXCdyuqtkPot4nlWV9SS4CNOd5TJPAvs5fHYF5PhIncHNu30tDKUtWDQGzkv7H068THjRZhi5WYr8muPYRK787OeB92yjV5Dx6jfv95XgCUh95+4bTfBsF6m/dneVLTXGXJhmORWGN1RNQ1RzL2Er7Eto+hOieeNeXw0Uwe+cN05ykP5zmO4qlqeLdOyWzlv0bBGxP3v2Bh3XQk4w8TiuTx1IG/otixMZx7U5x85ipz1+Ts0ywr/GwiSQAnA63iA1ZVpwb9nhK8ODrIQCWAG5bhyP7IBga1rcfXl+fnbKanAfSCaH+G+Gz3GbA9OH8vs8EgXuyH2lLWhxdB7Ds3EXcf85LkU+EhFZsGUXIpdHJoUEpLfu8JXhDy1JtGyWhhANAIplpSwnvx2XFH4PuDbPDJH3C2cviYc9FPNz6AzUBRGxfzMAvOaYLy9Wp+RfL5ghDy1G41iB6D+Oy1MEZQB+Qz6inxDtqbukS1JSt+wZcJTWMgHWA/m7RyC4DfWIfoEXNZ4sab3qgIVp3jYcP1Ssd4Qe4Hbko/lvcc/l/qwBRfCW2b4cKf9Q/MJefwuWlWt/jhBIWy4jxzhWhxpZ8A4flnykrztwHf2IBMnZEJSSZB/a5AOF9+cxgELu/Ql9VYbgsvmisKbFwMpQj7G0zJMkCadBCsoEbQbvwBr2sPJ+hAawZYvMkzfm2C/RXmEZ4K+neyXoH7M2B2AvSEutU1E445KPbOoOgWMhB0G/vMe6mMLqLOfhWBOA8BP0dOwHCutLQCSDT7QeyJp6s67cASFHf6J1QxpOb9aVO6AGgF++tSG4/MPFtadBYUNCLZXZ3TSXTVipEpYWz32Cm30T1h8vq3EKOKZY3CeUfsgQVapew7GxXDo7i2MN0U7LT5QHgB+B8pFLLenaN+zLHWBnZU0+8u7j7rw6UV6OkSaUa5gHN+PupHHb7nwzKIkvr/dGtlgpXzf33pmSLVFgwDIPs35ZDgbP+SWb4tTQJCpVsI9jr8Pyy1JjF/q368s94Evl03Ujma2Sv5PDlUvHuTVxWrGJjzVkq/RkHppCpSY+gpOVFufAhdWy+Gg2x0nZWr6GJpdd830YyGLZRVlFNOWbduUOaA3FsqFb35xUKsOBgGtiKXcXufpoljxOtWJJDBitZEuFcM1Kxfg5ZLHsMs3UhFWzeWvml+OoxxDVWdHZgsqWJZlvSEz/tn25A1pOVrIlY8LK5HX30LKSAu0xQnWWcnfoDYlyDQ2Cea2c1seGcilDjmNuFUW/YQvliGoN+eqJPuba5VKWCjtd3Lgrd4Avg3J+TOpWzeHJ0/UpU646oRcvH7dQ9yQUnisVvymi80h7M8oiLJmuV8151cLcHCJfKm/li3LF1nTW6DlSqXa2y964J3eBG5dyeTyGe5gdiZ9Aczkp4/IoLPNo+5JKYeyU2qxQPZO/BrWM/BLN6hpbufRejtaqVMp66Iq37sldYK7KrOwMhlVbzd0AKb4SU1ohmPHt+3IH/Fld0ud5UKBWU+9hmJZcMuaI+iYhV20pf4O6XCbJZVbT36MwdViinkHXCL16+T0ESqP9y63kaaXK9d+gyyWkGhm9x9yKfRHjEjk+iq+ms48oY7nLfA0csppGD2vEl9e0lSj+zK6mR8J4dZky1ZlXb11jg+xysFcTyld7PRga2eUDxV/d+Tf05PuBfNk/9sX0flMqXe31WEDkDy+Xsyyq6e7mMPiLi7U+W8UVzQ16tnvpKgmzdLXX4yG1/1wg32crWMmxw2WzZzqVK13do5YkF6a+LwpVq9p+Qytun30fx9oVZj6mxhfcOT+JqjvzseX5LB+OLZgKM99IZufj2KZEVJj5jeXqfIOxXVmHD2Fgn1+4MASxkot6W6gXUvcdxqpqnJ9DZs/adIXWqljJsgPFnl+28uSqZvjWqBHnFRt3ORfwyGhow3Nv6xqoYg3bHi35bHGuzVSwdreA4OxmZZ+rZBXXG1KxdebdcYXTHGv02TMerTJPqprd3mIqnZFuLwZKlX0eDOPpk5qdwsS40lYPgT5Tw15P5hVd0d4j4k4f0vE6POsTfAdufOQrHlknyVcge84qVAFUdNrlb8klTmV+bJzjvj18/c6uHIGqNUZeoI5VNbzhjU6CdUr11YR7eXyU3+q0l1GUJNFsPo9YUU79G30VffJ8zUCGN/rOc6DqYT9h+fxOF1JL1dDzQtUGEnMTThgt8cVMPvb673Ami++lnMRCAKS05RcmZU1jnBt8ncLxbhbF2UdD69PfXMbW6MTJEpHuhvV3GreuRTc4DVEHlvCbj//xEZs7w29M8FK6mmQCAPyfLelrc7++3s731NUEdGnGu7oZGshu2yK0f3wU0xPan2t/3SnoKp/NAei3jm0w1UshpJH2ix0oQOfaWbeGmY4hoTnD9wPr8+B7ZN8PJNkCINXf9UHvgwhpwGGgD2wh8ABz7cI63zTTmcD+c/ie0k6pEu+/heKtsgjR3shpP3BwawE3n4OJmr9DMRqksJ5w7Ypiw2VSkfu3f/8P/d0ZXZl4e9mvjwkRAndU4Pt2CBrmbDYB6lYlpzZoIF4RWq3QaIu/6gDj9lfcv/5z6h3XqRvzuf9Xn3wR1MhmeQCD9xqdGogcBPZ+VEKNzONuPbOu3Yd02u9CXp6+C+vD+OrfdQDFk0QOmO8yTTh6hyMgUHfTkcIGGrcOPNNz28a/ZhVCpv9EJtn7D27fNNFhBFGCZNt4f2WREkCaBGHhylNEvZirfGXuBIqvD7ygk/bbZo5+f6z+8Vq6b3zRJvScdh/SmrM6+nsF3nBR2+gkCQCHZjwfBsT5wBIA18L2dh/xfhnxFKbUW87KiSbzGZffkmXB/GZvOEeYRRGRREnWfg71prL9rLI98Z1unxbE1epI9evszZa2lJAWgfDR4UBKgHQ9fTjsXpyAMJXmk3nsADDL3E7gjXo9vV6vN/RebzQIglc5mgAwiaJotnRSb3dtfBm1qDhOX+PY2DnidSDfIM9Dtfo6NpL5j4mnQk4AhbRzLvxUkNEwQ9RNXJoBTeXUPiJKaerhmEGGcpYkyep51Cy548hx2rYlxc7RKq4sXX9Zd5QsV5kZz4H3Qd8oDxH/+2BYlF4/60ZgInZQvO/ZcLC+Cv3Y6K1vR9/+BW7oXh8CSCdJNu41Ve+iBI+dtgt5p3tY4qBcc3EH9ZP6hdVMgZmamgXUD+Y81tMIAIs100qrP0+6DpjW1yQ0RKm0z2PoqghgtIyQgnmtU81zYxCu2iZye9nDeLIhkteMLxCbQigzrskw8CPHtc4QJBgUZKLRF6IZ15XBePPQ0LRP3BWAoIxUwGUOQwMApuFp7723MttwyTnJwRh15LLnk5eDL/PDqWtqEvJe371Z6yO5D6i9qauFrGUBs93VwHYGKkMNfL6uEpCWZg88E8WRr70TItBcOS+0xnUTv/iU0a4aXXRILWc9LfGaeOxOUCrkQGrsFXU9nUUAekawivLb//IhwZ9i8ClVtNELTRXZA6Yzaj3zANgd/6OWSmy3xUhwpKLWoYjomkWsr4Q9NV2W5nkCFpOnOWmjKAJ5wPVr87s+5TmwqGOK68BtFg7HUjQJPv+t+FqfAkCkXi900c/pRxnTFYNUPzFki8PrR9e8TbHBMa4rczxBCOBowdRnoknhAreRRligU8t1jw3cnfYZy/DLB6JSEE1+OA16g/FaDbxr8Mw8OVAUteIOxREbfe3bPoTBMUOWyFkvHmZVKRVN+u2w59pfZOHGFwxECQRbwcc6NvwLRVT7I+YjII0HvRQA8x3/vczskiw7LN6r0rlQ5Pwp1CEUpoxE0OAopdaDBFjsVVIjXiLtn78ypoz1du+jKkP7q1ZorQKUlsvnIvCUpH76+8+RDuzFTtsSOUcqiPsUTYW/X1nbuO0daLES62iwuEca8bW2QGa5vvNNm2Y0W5s+CustbcBsO4lT4xhmX7fBvzZpDP1VQwMAHL3T8OTXRvHzmvHqKWI5lyj4OTw/ugL5OXyNEJhozM+sI1Pi0dHa2K2hjAlia/rwsZaAfVuqL0/ka+yY9//IEIw7IDS8sD8N32ilsrib97Gg+g1gNa9DfsARPIO8udqB3aWQymOBvFYEFCKuRbMgzRvgiBkMSe47p5g2Ob3SeQFKC4DA9RjQoHrs+E0HrOJubEk2+5bbatJQuQb5vozEfkg01zqsEIDhATLt+7Vj32WBuKU4TLKCOqitYrC43nEJFBrv+khTbdj0n0xvO9nHmstAVivUt/UkASt7Pv8p4DnroWpq0zxzgRfTGj4jAndPYxARYFsybTirfFjW7VDruqiB6+dcaqMRdOKw7rc2ZsjTXBT0EPZbCZenXcHlRX6uoLvs+wMAQ4EusD5eAnMj91hrtgLsm2lsxfznfL2yUHoddRx19I0PoiOH1CKQ+O9Vv6r99TEFVIe2VEPjjz6IwppI1M096zs8vb7XGmk9oy+yoKAfOygGvN0J4EYL8JuRbrKyKwgSM91rnAX7tzLXYEWuQYnS+DiXN0gSJOrrZ2gosgz0t0MxmsUTzt9PdKOfzYF/y7ucd8ymlpkrcqzs7CWS+csUvzLmIYrqNf71IJWJY0pfg7nC3zzzCD7n7zrH12fFjV+/ae8PZaAp33OTtZM5ssXLzl7y6L+7cqFHSKyPfCfieN7XkXjvPT/FFAGzDfR6vAy2Ee1mYHaD8R1QM4fJF/pedg+4v9m3ZpjEOqVh0sfJ8xCZd3/zksLqrLyP5vuEBNI3V0xJtYJyvDm8JYPIF51494D+C/LDWcTkPkXKH3nqiqkVdF7A8sDfrE2MOA2+Xe2DY/WhBr7zVDh9GU8tWlytttqA4qJPJ/q2U7yhsWRrHaYJR1c1+SiE9XYNDcYGi83oKGbCgtfCSIUZu3vve2DM4inPJf/FbFlAccJXyM/VNUG+rqn2uKOEwWAWb4K4vKEexTvh9ubxpJjHarrxDHzrxrFfeKYxEpf887+3X/sV8nM59iyar69fNuBRbcBYFJg3Yy9J22qymsvzb5nf/CMyDYjfe6fnL8wVHfn3v/7zf7ZameLoT5OPI1Mv7XI5PkS+TMFmGU785r0q9hBsr/QI5ssJWfiqWjeOjpMCN8cvTBUdGxL/u79X7guav2bS8HXLX4PYeDYb+pF3kzhgn8Kv00wu3FSuDditHdy29dCcuPWq+kcYJHau+vcblbnZJ71NRRUEecdGSoQHHNTRtPd3v4SERq5/UZ5nGZA2z9fkN005Aeo9TsOrJzLD0SwjbtnHfm4LBz7gePhmp13OfFttxzFPEPn9bF7IAooA87xehJzaYkDjofAO3qeItEYKPCckq93ZRdPkMz5/T4wmAbWd6zg2ng2p/bynsE6S7FO2huZspL1pItfffcvto5gfzfq7sD4HTUKOS7LdQpcapZfi/f3UbgyJfJFiT0nIQWW/+ohUPjsf70ov6jMG+fgUigZnywnU3z6ECkQZEPfbMaYDMEuSbGeswt/DSzUC25XJujubO0Ub17MKJg/HFtIuhsWxAWevp73OZ9HBOqfuIFvfuWfpvFHrAXpfINMAFlUm2VU3LTg8YBoy+MXloYUM9rGjKrOykvs1vAjswogpY40FWvOLxTnXAlWwOTUAS6Q66y4H5UMLWYNvFg6Rg7z8nQ6lFjbs5yaC00hQXMgeLDPreO3nHnhd7kNMCsxOJbr3c16fWlDTD58bnFU0ef19TIcpQzefBV4k0wdi7rtiAsyfcHV7Hb5dPGxGp1T/hnyqlc0mB5zPn1MsvR9BHEfOFLmj3mBd5OTrWbYE7l7ucSQLWQzADzkXZPqW6/Xm587vMwKCA+77JWCXnxay0iEh7EShFrnAb7oowhcahTneYm3rviqvCD+vKKO2L0/v36v35zPQ99+/sSCK2311S+xvrac/6/K9VLLBQShXd2N2rQO/I6FVBgEx2alxIirkXAsZNyOUICRD44Mqyn6+NrLnvhLZ4q7KIOrOnmLGAn92Zcv5B6VJRm4yfT+FfMzkya1Ih5DeP93XUCktl+QA83E8oHIHxTdmvAv4m7OnzHE4oO5KDtGHUSGXfX9sdx6IcS5NbvwRA1hHGskYmIh2MjgxKQLhIMJvJFFvIyDNyOmuZmBcHJsBL4s/Q98fQQU0uS6GM4VCWaOid9jJDOzry9+jYx3mNxb2Zp1I8ZJud3JIfE/U5F2s94OwFsu6BH4Dc+DrgGvkxZK+7qUCgBPAddaJnI+nKqLeL/5O/SYa+ai9ktkKgMAozCBdRqHdDZdv/ha6C8CEnBMJG00mYIL+gajfOrXXb01VhwOHcqGA+OllOY9XknVYuawzy3gCrr8n6ZpQeh0Ggok4BIBjxvsS4ZNIOeAfPRrzcRwnEy6GxZhet0UZgvBHE78FrlpWia1MeL6eQb5v2Gq740F9XtgnQA2ynPjgp5+BtK0RpgS+zLWcxvD0bsfAJnexfzOIljFcb1N4EPiAZy54JTjmRxF7cnIAbWPalZFpxTEgf/acP8YIEJeOLGrBuUudCtUNQDZwpTlYQAnZeeaHhDbl8QcI5rn8G5XOz7pugIiiyXwZyyQ85S79XORHlwPCPj1b61J03oCPomUWJySv+tfu2zdhAIT32eeNPlBUCO2zNhHHjF5r0PuBzm1pNMDx9osN1htvStaA/JSI7iswpgDCY5VthByd5+kv48bnztwaiO4WcoJhYTOAMlqQApAvF/w/OOk7UGEeBczaqtcaBKlN5jtNqntk9wegeou8IhoFQHP0v+09sjb7GvBmKwyCIGz5D+W6ncX/AWeP3xT9UwGZAAAAAElFTkSuQmCC" alt=""/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Earphone Model</div>
                <p className="text-gray-700 text-base ...">High-quality earphones with excellent sound.</p>
            </div>
            <div className="px-6 py-4">
                        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2">In Stock</span>
                        <span className="inline-block bg-[#5e11c2] rounded-full px-4 py-1 text-sm font-semibold text-white ">Buy</span>
            </div>
            </div>
        </>
    )
}
export default Access;