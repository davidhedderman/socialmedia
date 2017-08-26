package com.socialmedia.DAO;

import javax.ejb.Local;
import java.util.Collection;
import com.socialmedia.entity.User;
/**
 * Created by d16125338 on 06/07/2017.
 */
@Local
public interface UserDAOInterface {
    Collection<User> getAllUsers();
    public void addUser(User user);
    public void deleteUser(Integer id);
    public User findUser(String username, String password);
    public  boolean checkUser(String username);
    //public User getUser(String username);
}
